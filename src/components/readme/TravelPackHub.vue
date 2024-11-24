<template>
<v-container>

<p><img src="https://storage.googleapis.com/zenn-user-upload/b4980c33d923-20241016.png" alt="Image description" class="img-fluid"></p>
<p><a href="https://github.com/KazumaWada/TravelPackHub">https://github.com/KazumaWada/TravelPackHub</a></p>
<h1 id="-">これを作る前のプログラミング学習歴や方法</h1>
<p>Progateやドットインストールをやった後に、RubyonRailsで<a href="https://github.com/KazumaWada/myapp">ブログサイト</a>を作りました。その後<a href="https://recursionist.io">Recursion</a>というコンピューターサイエンスが学べるサイトで学習しました。(これらの学習は約2年間。アプリケーションの開発期間は5ヶ月間くらいです。)</p>
<h1 id="-">どんなアプリケーションか</h1>
<p>「海外へ行く時の必要な持ち物リスト」です。</p>
<p>あるウェブサイトから「海外　持ち物」でヒットした記事をスクレイピングし(約7000記事)、記事内で紹介されている持ち物（Amazonリンク付き）をリストとしてまとめました。</p>
<h1 id="-">なぜこれを作ろうと思ったか</h1>
<p>「せっかく作るなら収益化してみたい」と思いどのように収益化できるアプリケーションを作ろうか調べていたところ、ジャバ • ザ • ハットリさんのこの記事を見つけました。</p>
<p><a href="https://qiita.com/jabba/items/1a49e860a09a613b09d4">開設後３週間で収益１０万円を得た個人開発サイトでやったことの全部を公開する - Qiita</a></p>
<p>この記事内で説明されているアプリケーションは<a href="https://techbookrank.com/">こちら</a>です。</p>
<p>憶測ですが、このアプリケーションはAmazonのアソシエイトIDをスクレイピングしてきた各技術書(Amazonリンク)に貼り、ユーザーが購入したら紹介料として収益が発生するのではないかと思いました。</p>
<p>このやり方をそのまま真似して、<a href="https://note.com/imnotkatsuma/n/n21a00606f5c8">自分の興味のある分野で作ろう</a>と思いました。</p>
<p>「自分の興味がある分野は何だろう？」と考えました。</p>
<p>僕は大学を卒業してから現在ワーキングホリデーで海外生活3年目に突入します。</p>
<p>それなら「海外」「英語」に関連する分野ならアプリケーション作成の道のりが長くても興味があるので続けられると思いました。そしてスクレイピングしてくるデータはAmazonの商品として存在していなければいけなかったのでその事について考えていると、「海外に持って行く持ち物」ならいけそう(自分の興味のある分野かつAmazonリンクが貼れて収益化ができそう)と思いました。
そしてサイト名をTravelPackHub(海外への持ち物が集まったハブ)という名前に決めてそれを作る事にしました。</p>
<h1 id="-">技術</h1>
<p>フロントエンド: HTML/CSS/Javascript(デザインはBootstrap)</p>
<p>バックエンド: Node.js(スクレイピングはpuppeteer)</p>
<p>データベース: MySQL</p>
<p>インフラ: Docker</p>
<p>デプロイに使用したソフトウェア: Heroku</p>
<p>技術選定理由:
以前からJavaScriptでコードを書いていた事が多く、慣れていたのでJavaScriptにしました。フレームワークは使用していません。(理由は後述します)</p>
<h1 id="-">開発中に起こった問題にどのように対処したか</h1>
<h3 id="-01">起こった問題01</h3>
<p>JavaScriptのフレームワークの書き方が分からない</p>
<h3 id="-01">原因と対処01</h3>
<p>Next.js(React), Angular, Vueなどのモダンな技術があり、ZennやQiitaの記事を見ていると個人開発やポートフォリオまたは業務で使っている方々がいますが、それを使って個人開発を進めるとそのフレームワークの学習に時間を取られ開発スピードが遅くなってしまうと考えていました。僕は早くリリースして「個人開発をリリースできた」という成功体験が欲しかったので、書き方を既に知っている生のJavaScriptで書いていく事にしました。(機会があれば学んでいきたいです。。)</p>
<h3 id="-02">起こった問題02</h3>
<p>ローカル環境でスクレイピング中に変数が差していたメモリが超過してタイムアウトエラー</p>
<h3 id="-02">原因と対処02</h3>
<ul>
<li>スクレイピングしてきた大量のデータをひとつの変数に一気に格納しようとしていたのが原因で起こりました</li>
<li>スクレイピングしている途中でpupetteerがたくさんのタブを開きすぎていた。(webサイトの各記事内へ移動しその中のAmazonリンクを探し出すというのを7000件ほどやったのでたくさんタブを開くことになった。)</li>
</ul>
<p>変数が指し示すメモリが上限に達する可能性があるという事を理解し、ある程度データが変数に格納されたらファイルに書き出し、変数を初期化するというループに書き換えました。</p>
<pre><code class="lang-jsx">    <span class="hljs-keyword">let</span> batchSize = <span class="hljs-number">15</span>;
    <span class="hljs-keyword">let</span> articlesBatch = [];
    <span class="hljs-keyword">let</span> processedCount = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">const</span> maxToProcess = <span class="hljs-number">6500</span>; <span class="hljs-comment">//url i want to scrape has approximatly 7000 so i set below 7000 to make sure no error occur.</span>

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> article <span class="hljs-keyword">of</span> articles) {
      <span class="hljs-keyword">if</span> (processedCount &gt;= maxToProcess) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Reached limit of <span class="hljs-subst">${maxToProcess}</span> articles. Stopping.`</span>);
        <span class="hljs-keyword">break</span>;
      }
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Processing article:"</span>, article);
      <span class="hljs-keyword">await</span> processArticle(page, article);
      articlesBatch.push(article);
      processedCount++;
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"processedCount"</span>, processedCount);

      <span class="hljs-comment">// If the batch size exceeds the limit, write to the file</span>
      <span class="hljs-keyword">if</span> (articlesBatch.length &gt;= batchSize / <span class="hljs-number">3</span>) {
        <span class="hljs-comment">//pushed amazonLink,title,imgs into articlesBatch.</span>
        appendToFile(<span class="hljs-string">'articleWithAmazon.json'</span>, articlesBatch);
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Inserted batch of <span class="hljs-subst">${articlesBatch.length}</span> articles into the file.`</span>);
        articlesBatch = []; <span class="hljs-comment">// Clear the batch</span>
      }
    }
</code></pre>
<h3 id="-03">起こった問題03</h3>
<p>Heroku上でスクレイピングを実行して、メモリが超過した。</p>
<h3 id="-03">原因と対処03</h3>
<p>ローカルでは先ほどにも書いた、変数にある程度データが入ったらファイルに書き出して変数を初期化するという方法で実行できたのですが、heroku上ではメモリを保存できる量が自分のローカル環境と違うのか詳しくは分かりませんが、本番環境でスクレイピング中にエラーが発生してしまいました。</p>
<p>そもそもHerokuのサーバー内で何が起こっているのか詳しくわからず、その中で大量のデータを取得するコードを実行するのは良くないと思い、ローカルでスクレイピングを実行し、そのデータをファイルに書き出し、Heroku上ではその書き出されたファイルを読み込むのみにしました。</p>
<p>つまり、ローカルでのみスクレイピングする関数を実行し、本番環境ではその関数をコメントアウトしてHerokuに上げました。</p>
<pre><code class="lang-jsx">app.<span class="hljs-keyword">get</span>(<span class="hljs-string">'/start'</span>, <span class="hljs-keyword">async</span>(req,res) =&gt;{
  <span class="hljs-keyword">try</span>{
    <span class="hljs-comment">//webサイトから記事をスクレイプする関数</span>
    <span class="hljs-comment">//await scrapeData(); //commentout will be removed in local when scraping needed</span>
    <span class="hljs-comment">//各記事内に入ってAmazonリンクをスクレイプする関数</span>
    <span class="hljs-comment">//await getAmazon(); //commentout will be removed in local when scraping needed</span>
    <span class="hljs-comment">//上記の関数の結果を全てファイルに書き込んだら、本番ではDBに挿入するだけにする。 </span>
    <span class="hljs-keyword">await</span> insertArticlesAndAmazonsToDB();<span class="hljs-comment">//active in production.</span>
    console.log(<span class="hljs-string">"done!!!"</span>);
    <span class="hljs-comment">//res.status(200).send('scrape done');</span>
  }<span class="hljs-keyword">catch</span>{
    res.status(<span class="hljs-number">500</span>).send(<span class="hljs-string">'scrapeData() not started...'</span>)
  }
})
</code></pre>
<h3 id="-04">起こった問題04</h3>
<p>AI(cursor)に頼りすぎてデバックに時間がかかった。(制作期間が5ヶ月かかった原因の一つ)</p>
<h3 id="-04">原因と対処04</h3>
<p>手間を省くために主要な関数の実装をAIに任せた結果、デバックをする時にコードを読む時間がかかったり、自分の理解の範囲を超えた書き方をしていた部分がありました。</p>
<p>自分でコード全体をコントロールできていない感じがして、(関数を実行してエラーが起こったらどこが原因が分からず怖かった。)もう一度スクラッチから書き直しました。</p>
<p>簡単なCSSの実装など、エラーが起こってもぜんたいに影響を及ぼさないコードはAIに頼りました。</p>
<h1 id="-">得た学び</h1>
<ul>
<li><p>億劫だけど、時間を無駄にしないために個人の技術ブログではなく公式を読む。</p>
</li>
<li><p>自分で作りながら学ぶのが一番学習効率が高い。全て自分ごととして責任を持って考えることができるから。</p>
</li>
<li><p>とりあえずリリースして成功体験を積むために、機能を最低限にしてリリースしたのが良かった。(これから追加機能をアップデートしていく予定です。)</p>
</li>
</ul>
<h1 id="-">おわりに</h1>
<p>今まで独学でエンジニアの人と関わった事がないので文中で僕の知識が偏っていたり、誤認識している部分があったかもしれません。</p>
<p>次はどうやってサイトにアクセスしてくれるユーザーを増やしたらいいのか考えて実行したり、新しいアプリケーションを作ったりしていきます。AIも活用して開発スピードを上げていきたいです。</p>
</v-container>
</template>