# Twitter Clone Project
---

### 📝 개요
+ React와 Firebase를 활용하여 Twitter를 서버리스 구조로 클론 코딩한 웹 프로젝트 입니다.

<br/>

### 💻 사용 기술
+ JavaScript
+ React
+ Firebase
+ React-Router-Dom

<br/>

### 🏚 개발 환경
+ OS : Mac
+ Front-End : React
+ IDE : IntelliJ
+ Platform : PC Web
+ Test Browser : Chrome v.100.0.4896.60
+ Test Device : iPhone 13 Pro

<br/>

### 🔗 배포 URL
+ https://kyoo130.github.io/nwitter/

<br/>

### 💬 구현 기능
+ 이메일, 구글, 깃헙 계정으로 회원가입, 로그인, 로그아웃 기능을 구현하였습니다.
+ 타인과 소식을 공유할 수 있도록 사진을 포함한 트윗 게시글을 올릴 수 있는 기능을 구현하였습니다.
+ 작성자 계정으로 로그인할 경우에만 게시글 수정, 삭제 버튼이 노출되도록 기능을 구현하였습니다.
+ 기본 프로필은 'User' 이며, 프로필 메뉴를 통해 이름을 변경할 수 있도록 기능을 구현하였습니다.

<br/>

### 🛠 구현 화면
| 회원가입 & 로그인  |
|-------------|
|<img width="1431" alt="스크린샷 2022-04-05 오전 12 50 32" src="https://user-images.githubusercontent.com/77729264/161583889-a3dae432-f4c4-45a1-95d7-1fd1fb505fc3.png">|
|게시글 CRUD|
|<img width="1431" alt="스크린샷 2022-04-05 오전 12 51 06" src="https://user-images.githubusercontent.com/77729264/161583935-a578c269-55ab-4dc7-a383-bdbfb9d14cd0.png">|
|프로필 변경|
|<img width="1431" alt="스크린샷 2022-04-05 오전 12 51 16" src="https://user-images.githubusercontent.com/77729264/161583969-b0a7322e-68f9-4b4f-97fb-d97344bc8256.png">|

<br/>

### 📂 프로젝트 구조
```bash
src.
├── ./components
│   ├── ./components/App.js
│   ├── ./components/AppRouter.js
│   ├── ./components/AuthForm.js
│   ├── ./components/Navigation.js
│   ├── ./components/Nweet.js
│   └── ./components/NweetFactory.js
├── ./fbase.js
├── ./index.js
├── ./result.txt
├── ./routes
│   ├── ./routes/Auth.js
│   ├── ./routes/Home.js
│   └── ./routes/Profile.js
└── ./styles.css
```
