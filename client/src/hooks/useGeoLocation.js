import {useEffect, useState} from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
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
    }
  }, [location]);

  return location;
};

export default useGeoLocation;
