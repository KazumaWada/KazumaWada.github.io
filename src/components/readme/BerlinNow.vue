<template>
      <p><a href="https://app.circleci.com/pipelines/github/kazumawada/myapp"><img src="https://circleci.com/gh/kazumawada/myapp.svg?style=svg" alt="&lt;ORG_NAME&gt;"></a></p>
<h1 id="-https-berlin-now-net-">ベルリンなう <a href="https://berlin-now.net(現在サーバー停止">https://berlin-now.net(現在サーバー停止</a>)</h1>
<p> ベルリンにまつわることを共有するサービスです。
「かんたんログイン」を使って下さい。</p>
<p><img src="https://user-images.githubusercontent.com/57794648/110725759-74508180-825b-11eb-9a57-c31f9e757e80.png" alt="FireShot Capture 064 - ベルリンなう - localhost"></p>
<p><br><br></p>
<h1 id="-">クラウドアーキテクチャー</h1>
<p>Rails, Puma, MySQLとNginxをDockerコンテナに乗せて、EC2インスタンス内でdocker-compose upをしています。ローカルでpush後、mergeされたら、EC2への自動デプロイをCircleCIで行います。<br>httpsは、Route53(DNS),ALBを経由して、EC2にアクセスさせるようにしています。SSL証明書は、ACMで発行しています。</p>
<p><img src="https://user-images.githubusercontent.com/57794648/113692540-9a592c80-9708-11eb-871f-0d6272ce06b3.png" alt="good"></p>
<p><br></p>
<h1 id="-">機能一覧</h1>
<p>・CRUD機能(User,Post)<br>
・ソート（人気、新着、view数順でそれぞれ表示）<br>
・ゲストログイン<br>
・投稿数の表示<br>
・いいねした数の表示<br>
・画像アップロード(gem &#39;carrierwave&#39;)<br>
・いいね(非同期)<br>
・Paginate(hem &#39;kaminari&#39;)<br>
・返信/コメント<br>
・続きを読む<br>
・impression数(gem &#39;impressionist&#39;)<br>
・タグ(記事内にハッシュタグで表示, トップページのサイドバーに一覧表示)<br>
・検索<br>
・API(gem &#39;json&#39;)<br>
 &nbsp; &nbsp;・ベルリンの天気API<br>
 &nbsp; &nbsp;・ベルリンの気温API<br>
 &nbsp; &nbsp;・ドイツのニュースAPI</p>
<p><br></p>
<h1 id="-">使用技術</h1>
<p>・Ruby 2.6.6<br>
・Ruby on Rails 6.1.0<br>
・MySQL 8.0<br>
・Nginx<br>
・Puma<br>
・AWS(EC2,Route53,ACM,ALB)<br>
・Docker<br>
・CircleCi CI/CD<br>
・RSpec<br>
・Weather API<br>
・News API</p>
<p><br></p>
<h2 id="-">アップデート中のもの</h2>
<p><a href="https://github.com/kazumawada/myapp/issues/142#issue-821933525">バグ</a></p>
<p><a href="https://github.com/kazumawada/myapp/issues/143#issue-822792867">アップデート中の機能 1</a></p>
<p><a href="https://github.com/kazumawada/myapp/issues/146#issue-823820013">アップデート中の機能 2</a></p>
<p><br></p>
<h2 id="-">各種リンク</h2>
<p><a href="https://qiita.com/kazumawada">Qiita</a></p>
<p><a href="https://kazumawada.hateblo.jp/">技術ブログ</a></p>
<h2 id="usage">Usage</h2>
<pre><code>docker-compose build
docker-compose up -d
docker-compose <span class="hljs-keyword">run</span><span class="bash"> app bundle install
</span>docker-compose <span class="hljs-keyword">run</span><span class="bash"> app bin/rails db:create
</span>docker-compose <span class="hljs-keyword">run</span><span class="bash"> app bin/rails db:migrate
</span>docker-compose <span class="hljs-keyword">run</span><span class="bash"> app bin/rails db:seed
</span>docker-compose <span class="hljs-keyword">run</span><span class="bash"> app bin/rails webpacker:install
</span>docker-compose <span class="hljs-keyword">run</span><span class="bash"> app bin/webpack-dev-server</span>
</code></pre><h1 id="-">全体のスクリーンショット</h1>
<h4 id="root">root</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115528909-69165a00-a2cd-11eb-9e27-ef7fa2fb02a3.png" alt="FireShot Capture 163 - ベルリンなう - berlin-now net"></p>
<h4 id="users-id">users/:id</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529032-86e3bf00-a2cd-11eb-8a2b-d30db81d9838.png" alt="FireShot Capture 164 - ベルリンなう - berlin-now net"></p>
<h4 id="users-id-following">users/:id/following</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529261-b72b5d80-a2cd-11eb-9b8f-3d6d5fbb9f89.png" alt="FireShot Capture 165 - ベルリンなう - berlin-now net"></p>
<h4 id="users-id-followed">users/:id/followed</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529319-c3afb600-a2cd-11eb-9763-340c3f327504.png" alt="FireShot Capture 166 - ベルリンなう - berlin-now net"></p>
<h4 id="-users">/users</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529414-da560d00-a2cd-11eb-84f4-0fea36534ef3.png" alt="FireShot Capture 167 - ベルリンなう - berlin-now net"></p>
<h4 id="-posts-id-posts-id-search-search-">/posts/:id, /posts/:id/search?search=検索ワード</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529528-f22d9100-a2cd-11eb-8a17-a4f7e84bef99.png" alt="FireShot Capture 168 - ベルリンなう - berlin-now net"></p>
<h4 id="-">検索結果が見つからなかった場合</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115531372-aaa80480-a2cf-11eb-9f7e-f3376cad189e.png" alt="FireShot Capture 173 - ベルリンなう - berlin-now net"></p>
<h4 id="-posts-hashtag-name">/posts/hashtag/:name</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529747-1db07b80-a2ce-11eb-8ffc-275dba37454e.png" alt="FireShot Capture 169 - ベルリンなう - berlin-now net"></p>
<h4 id="-posts-new-posts-edit">/posts/new, /posts/edit</h4>
<p><img src="https://user-images.githubusercontent.com/57794648/115529877-3d47a400-a2ce-11eb-97b7-b8121f9653b6.png" alt="FireShot Capture 170 - ベルリンなう - berlin-now net"></p>
</template>