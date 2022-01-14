# 라이브러리 를 이용한 리액트 차트
- 라우터 사용 작은 네비
- 페이지별 라이브러리 차트
- https://apexcharts.com Apex
- https://www.chartjs.org chart js
```
Apex Line chart - home.js
Apex bar chart
Apex real time chart *
coreUI line chart
  (core UI 와 연결된 차트 출력 가능하나, 툴팁 에러)
  (chart js 자체는 연결 불가 라이브러리 문제 - utils)
```
##  구현 화면

#### Apex line chart
![1](https://user-images.githubusercontent.com/79763173/149437690-97d381a5-9d0b-4984-8ed2-057c121803e9.jpg)
```
router사용 작은 네비로 페이지 분리
```

#### Apex bar chart
![4](https://user-images.githubusercontent.com/79763173/149437687-31bab3ba-d360-40bd-9eab-b534e01c6c50.jpg)

#### Apex real time chart *
![3](https://user-images.githubusercontent.com/79763173/149437692-01ce9f6f-8033-4061-859c-d615939c19a7.jpg)
![3-2](https://user-images.githubusercontent.com/79763173/149437694-3228454b-d14c-4b52-8c0f-826ad0964469.jpg)
```
실시간 계속 렌더링 하여 네트워크가 불안
```

#### coreUI line chart
![2](https://user-images.githubusercontent.com/79763173/149437691-648de03b-9c74-4659-be11-19ca438b68dd.jpg)
```
코드는 가장 가벼우나, 툴팁 액션 오류
```
