/**
 * UFB DUAL 導入実績プロジェクト一覧データ
 * 
 * 【追加方法】
 * 下記の配列 `properties` に新しい物件のデータを追加してください。
 * 画像は `images/` フォルダに配置し、ファイル名を正確に記載します。
 * 
 * ※画像がない場合（サンプル画像を表示したい場合）は、
 * `image: ""` と空にするか、任意のダミー画像URLを指定し、
 * `isSample: true` と設定してください。
 */
const properties = [
    {
        company: "株式会社クレアスライフ",
        name: "コンシェリア東京<br>&lt;HIGASHIJUJO RESIDENCE&gt;",
        address: "東京都北区東十条四丁目8番16、18、35（地番）",
        url: "https://www.concieria.tokyo/cc/higashijujo-r",
        image: "images/concieria.jpg",
        isSample: false,
        isInstalled: true
    },
    {
        company: "株式会社LeTech",
        name: "LEGALAND桜新町ANNEX",
        address: "住居表示：東京都世田谷区弦巻4丁目22-13／地番：東京都世田谷区弦巻4-21-21ほか",
        url: "https://legaland.jp/about/lineup/legaland%e6%a1%9c%e6%96%b0%e7%94%ba/",
        image: "images/legaland_sakurashinmachi.jpg",
        isSample: false
    },
    {
        company: "阪急阪神不動産株式会社",
        name: "ジオエント上新庄",
        address: "大阪府大阪市東淀川区上新庄２丁目４４１-２（地番）",
        url: "https://www.hhp.co.jp/news/2024/07/000662.html",
        image: "images/Geoent Kamishinjo.jpg",
        isSample: false
    },
    {
        company: "大阪ガス都市開発株式会社",
        name: "アーバネックス谷町四丁目",
        address: "大阪市中央区内本町1丁目2－10",
        url: "https://www.ogfa.co.jp/chintai/property/272844-2",
        image: "images/Urbanex.png",
        isSample: false
    },
    {
        company: "株式会社シティインデックス",
        name: "シティインデックス川越",
        address: "埼玉県川越市中原町1丁目5番7，23（地番）",
        url: "https://cityindex.co.jp/cikawagoe/",
        image: "images/city_index_kawagoe.jpg",
        isSample: false
    },
    {
        company: "株式会社マリモ",
        name: "ポレスター三山木駅前",
        address: "京都府京田辺市三山木中央1丁目4-3（地番）",
        url: "https://polestar-m.jp/1050/",
        image: "images/ポレスター三山木駅前.jpg",
        isSample: false
    },
    {
        company: "株式会社マリモ",
        name: "SOLTIA WEST CITY FRONT",
        address: "大阪府大阪市西区立売堀四丁目12-2，15-2（地番）",
        url: "https://soltia.jp/856/",
        image: "images/soltia_west.jpg",
        isSample: false
    },
    {
        company: "株式会社マリモ",
        name: "ポレスター福井駅東ブライティア",
        address: "福井県福井市日之出2丁目404-1番（地番）",
        url: "https://polestar-m.jp/1026/",
        image: "images/polestar_fukui.jpg",
        isSample: false
    },
    {
        company: "ケイアイスター不動産",
        name: "K HOUSE 大宮",
        address: "埼玉県さいたま市大宮区仲町三丁目98番（地番）",
        url: "https://ms.ki-group.jp/omiya/",
        image: "images/k_house_omiya.jpg",
        isSample: false
    },
    {
        company: "株式会社マリモ",
        name: "グラディス鷹匠タワー",
        address: "静岡県静岡市葵区鷹匠三丁目1-2（地番）",
        url: "https://gladis.jp/1029/",
        image: "images/gladis_takajo.jpg",
        isSample: false
    },
    {
        company: "アートプランニング株式会社",
        name: "JR大阪天満宮駅近く",
        address: "大阪府大阪市",
        url: "", // 公式サイトではないためリンクを削除
        image: "images/art_planning_tenma.jpg",
        isSample: false
    }
];

// 共通のフォールバック用ダミー画像（きれいな建物の写真など）
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop";

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('property-grid');
    const template = document.getElementById('property-card-template');
    const countDisplay = document.getElementById('results-count');

    // 件数を表示
    countDisplay.textContent = `全 ${properties.length} 件`;

    // ループしてカードを生成
    properties.forEach(prop => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.property-card');
        const imgWrapper = clone.querySelector('.card-image-wrapper');
        const img = clone.querySelector('.card-image');
        
        // 画像URLの設定（空文字や見つからない場合はエラーイベントで処理）
        img.src = prop.image || FALLBACK_IMAGE;
        img.alt = `${prop.name}のイメージ画像`;
        
        // 画像読み込みエラー時のフォールバック処理
        img.onerror = function() {
            this.onerror = null; // 無限ループ防止
            this.src = FALLBACK_IMAGE;
            // エラーになった場合は自動的にSAMPLE扱いにする
            imgWrapper.classList.add('has-sample');
        };

        // isSampleがtrueの場合はSAMPLEオーバーレイを表示
        if (prop.isSample) {
            imgWrapper.classList.add('has-sample');
            // sampleなのに画像が指定されていなければFallbackを使用
            if (!prop.image) {
                img.src = FALLBACK_IMAGE;
            }
        }

        // テキスト情報を流し込む
        clone.querySelector('.card-company').textContent = prop.company;
        clone.querySelector('.card-title').innerHTML = prop.name;
        clone.querySelector('.card-address span').textContent = prop.address;

        const badge = clone.querySelector('.ufb-badge');
        if (badge) {
            badge.textContent = prop.isInstalled ? "UFB DUAL 搭載" : "UFB DUAL 搭載予定";
        }
        
        // リンク設定
        const link = clone.querySelector('.card-link');
        const urlStr = prop.url ? String(prop.url).trim() : "";
        
        if (urlStr !== "" && !urlStr.includes("公式サイトを見る消して")) {
            link.href = urlStr;
        } else {
            // URLがない、または除外指定の場合はボタンを非表示
            link.classList.add('hidden');
            link.style.display = "none";
        }

        grid.appendChild(clone);
    });

    // ==========================================
    // SEO: Generate JSON-LD Structured Data
    // ==========================================
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "UFB DUAL マンション導入実績一覧",
        "description": "全館浄水システム「UFB DUAL」が採用された最新のマンションプロジェクト一覧です。",
        "itemListElement": properties.map((prop, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "RealEstateAgent", // or "ApartmentComplex" for the building itself
                "name": prop.name,
                "description": `${prop.company}が提供する「${prop.name}」`,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": prop.address
                },
                "url": prop.url || "https://ufbtech-co.jp/mansion/"
            }
        }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);

});
