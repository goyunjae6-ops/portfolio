# 포트폴리오 문의 메일 연결

문의 폼은 EmailJS를 사용합니다. 폼을 여는 것만으로는 메일이 전송되지 않으며, 이메일 서비스와 템플릿을 연결해야 합니다.

## EmailJS 설정

1. https://dashboard.emailjs.com/ 에서 로그인합니다.
2. Email Services에서 메일 서비스를 추가하고 연결 테스트를 완료한 뒤 Service ID를 확인합니다.
3. Email Templates에서 문의용 템플릿을 만듭니다.
   - To Email: `goyunjae6@gmail.com` (수신 주소를 고정합니다.)
   - From Name: `{{from_name}}`
   - From Email: 연결한 서비스의 기본 주소를 사용합니다.
   - Reply-To: `{{reply_to}}`
   - Subject: `[포트폴리오 문의] {{from_name}}`
   - Content: 이름 `{{from_name}}`, 답변 주소 `{{reply_to}}`, 문의 내용 `{{message}}`를 넣습니다.
4. 저장 후 Template ID를 확인합니다.
5. Account에서 Public Key를 확인합니다. Private Key나 메일 비밀번호는 이 프로젝트에 넣지 않습니다.

## 로컬 실행

프로젝트 최상위에 `.env.local`을 만들고 실제 발급 값을 입력합니다.

```dotenv
VITE_EMAILJS_SERVICE_ID=발급받은_Service_ID
VITE_EMAILJS_TEMPLATE_ID=발급받은_Template_ID
VITE_EMAILJS_PUBLIC_KEY=발급받은_Public_Key
```

개발 서버를 종료한 뒤 다시 실행해야 변경된 설정이 반영됩니다. `.env.local`은 Git 추적에서 제외되어 있습니다.

## 배포

- Vercel: 프로젝트 Settings → Environment Variables에 위 세 이름과 값을 등록한 뒤 다시 배포합니다. 운영 배포에는 Production 환경에 값이 있어야 합니다.
- GitHub Pages: 저장소 Settings → Secrets and variables → Actions에 위 세 이름의 Repository secrets를 등록한 뒤 Deploy to GitHub Pages 작업을 다시 실행합니다. 워크플로는 빌드 시 이 값을 전달합니다.
- 로컬 설정은 배포 환경에 자동으로 복사되지 않습니다. Vite는 빌드할 때 환경 변수를 반영하므로 설정 후 반드시 다시 빌드해야 합니다.

## 전송 확인

문의 폼에서 테스트 메일을 전송한 뒤 EmailJS의 Email History와 수신함·스팸함을 확인합니다. 화면의 전송 성공은 EmailJS 요청 성공을 뜻하며, 실제 수신 여부는 수신함에서도 확인해야 합니다.

공식 문서: https://www.emailjs.com/docs/sdk/send/ 및 https://www.emailjs.com/docs/tutorial/creating-email-template/
