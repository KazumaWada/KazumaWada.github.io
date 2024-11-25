<template>
<v-container>
<div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
<p><strong>概要:</strong> note.comから「海外 持ち物」と検索をしヒットした記事の中の各Amazonリンクをスクレイピングし、その結果からcount数が多い順に表示しました。</p>
<p><strong>開発背景:</strong>「海外へ行くときに何を持って行けばいいんだろう」と思った時にググると個人でブログを運営している人や旅行会社、留学エージェントの記事などそれぞれ個々の意見で紹介されていますが、これを全て集めて一箇所で見れるサイトがあったら便利ではないかと思い作ってみました。</p>
<p><strong>開発に使用した技術:</strong></p>
<p>フロントエンド: HTML/CSS/Javascript(デザインはBootstrap)<br>
バックエンド: Node.js(スクレイピングはpuppeteer)<br>
データベース: MySQL<br>
インフラ: Docker<br>
デプロイに使用したソフトウェア: Heroku
</p>
<p><strong>関連記事:</strong></p>
<p><a href="https://zenn.dev/kazumawada/articles/f22d5a3b7ad42d" target="_blank">初の個人開発TravelPackHubをリリースしました。</a></p>
<p><a href="https://zenn.dev/kazumawada/articles/9438f59d39ac8c" target="_blank">個人開発TravelPackHubの反省点</a></p>


<br>
<div>
    <img src="https://storage.googleapis.com/zenn-user-upload/b4980c33d923-20241016.png" alt="Image" style="max-height: 200px;">

</div>

</div>
</v-container>
</template>