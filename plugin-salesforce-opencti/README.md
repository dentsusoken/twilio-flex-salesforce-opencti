# plugin-salesforce-opencti

Twilio Flex から Salesforce の Open CTI API を叩き、フローを起動するプラグイン

起動するフローについては _salesforce-screen_ フォルダに格納しています。

## ソースコードについて

- SalesforceOpenCTIPlugin.ts
  - オペレータがタスクを受け取った時をトリガーにフローを起動する設計にしています。自由に変更してください。
- OpenCTIController.ts
  - _salesforce-screen_ フォルダにあるフローを起動する前提でソースコード記載しています。こちらも利用したいフローに合わせて変更してください。
- utils.ts
  - loadScript メソッドで Javascript のロードを行なっています。

## その他

- 検証/デプロイする前に
  - `.env.sample`を参考に`.env`を作成してください
    - Open CTI の API ver を記入してください
  - `public/appConfig.example.js`を参考に`appConfig.example.js`を作成してください

## License

This software is released under the MIT License, see LICENSE.txt.
