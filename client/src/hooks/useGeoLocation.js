import {useEffect, useState} from 'react';
import {getLoc} from '@/apis/getLocation';
import {getTempHum} from '@/apis/getTempHum';
import {getPoint} from '@/apis/getPoint';

const useGeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [dong, setDong] = useState(null);
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [point, setPoint] = useState(null);
  const [pm10, setPm10] = useState(null);
  const [pm25, setPm25] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            setLocation({latitude, longitude});
          },
          (error) => {
            console.error('Error getting location:', error);
          },
        );
      } else {
        console.error('Geolocation is not supported.');
      }
    };

    getLocation();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.

  useEffect(() => {
    // 위치가 변경될 때마다 로컬 스토리지에 위치 정보를 저장합니다.
    if (location) {
      localStorage.setItem('latitude', location.latitude);
      localStorage.setItem('longitude', location.longitude);
      getLoc(location.latitude, location.longitude).then((res) => {
        setDong(res.data.data.location);
      });
      getTempHum(location.latitude, location.longitude).then((res) => {
        setTemp(res.data.data.temperature);
        setHumidity(res.data.data.humidity);
      });
      getPoint(location.latitude, location.longitude).then((res) => {
        setPoint(res.data.data.point);
        setPm10(res.data.data.pm10);
        setPm25(res.data.data.pm25);
      });
    }
  }, [location]);

  return {location, dong, temp, humidity, point, pm10, pm25};
};

export default useGeoLocation;
