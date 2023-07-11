// 郵便番号から住所を検索

function moveTonextQ(optionNum) {
    const progress_bar = document.getElementById("progressbar");
    const form_area = document.getElementById("form-area");

    if (optionNum === 1) {
        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="active">日程情報</li>
        <li>住所情報</li>
        <li>料金情報</li>
        <li>主催者情報</li>
        <li>その他</li>`;

        form_area.innerHTML = `
        <div class="f1">
            <h3 class="form-item">日程情報</h3>
            <div class="detail-form">
                <label for="event-start-date">開始日</label><br><input type="date" name="event-start-date"><br>
                <label for="event-end-date">終了日</label><br><input type="date" name="event-end-date"><br>
                <label for="event-start-time">開始時間</label><br><input type="time" name="event-name"><br>
                <label for="event-end-time">終了時間</label><br><input type="time" name="event-name">
            </div>
        </div>
        <button class="back-btn btn-main font-weight-bold mt-3" onclick="history.back()">戻る</button>
        <button class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(2)">次へ</button>`;

    } else if (optionNum === 2) {
        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="active">住所情報</li>
        <li>料金情報</li>
        <li>主催者情報</li>
        <li>その他</li>`;

        form_area.innerHTML = `
        <div class="f1">
            <h3 class="form-item">住所情報</h3>
            <div class="detail-form">
                <label for="yubin">郵便番号</label><br><input type="text" name="yubin"><button
                class="address-search">住所検索</button><br>
                <label for="prefecture">都道府県名</label><br><input type="text" name="prefecture"><br>
                <label for="town">市区町村名</label><br><input type="text" name="town"><br>
                <label for="ward">区</label><br><input type="text" name="ward"><br>
                <label for="place">場所名称</label><br><input type="text" name="place"><br>
                <label for="address">住所</label><br><input type="text" name="address"><br>
                <label for="address-detail">方書</label><br><input type="text" name="address-detail"><br>
                <label for="latitude">緯度</label><br><input type="text" name="latitude"><br>
                <label for="longitude">経度</label><br><input type="text" name="longitude"><br>
                <label for="how-to-access">アクセス方法</label><br><input type="text" name="how-to-access"><br>
                <label for="parking-info">駐車場情報</label><br><input type="text" name="parking-info">
            </div>
        </div>
        <button class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(1)">戻る</button>
        <button class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(3)">次へ</button>`;
    } else if (optionNum === 3) {
        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="complete">住所情報</li>
        <li class="active">料金情報</li>
        <li>主催者情報</li>
        <li>その他</li>`;

        form_area.innerHTML = `
        <div class="f1">
            <h3 class="form-item">料金情報</h3>
            <div class="detail-form">
                <label for="price(basic)">料金(基本)</label><br><input type="text" name="price(basic)"><br>
                <label for="price(detail)">料金(詳細)</label><br><input type="text" name="price(detail)"><br>
            </div>
        </div>
        <button class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(2)">戻る</button>
        <button class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(4)">次へ</button>`;
    } else if (optionNum === 4) {
        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="complete">住所情報</li>
        <li class="complete">料金情報</li>
        <li class="active">主催者情報</li>
        <li>その他</li>`;

        form_area.innerHTML = `
        <div class="f1">
            <h3 class="form-item">主催者情報</h3>
            <div class="detail-form">
                <label for="organizer">主催者</label><br><input type="text" name="organizer"><br>
                <label for="contact-name">連絡先名称</label><br><input type="text" name="contact-name"><br>
                <label for="contact-tel">連絡先電話番号</label><br><input type="tel" name="contact-tel"><br>
            </div>
        </div>
        <button class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(3)">戻る</button>
        <button class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(5)">次へ</button>`;
    } else if (optionNum === 5) {
        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="complete">住所情報</li>
        <li class="complete">料金情報</li>
        <li class="complete">主催者情報</li>
        <li class="active">その他</li>`;

        form_area.innerHTML = `
        <div class="f1">
            <h3 class="form-item">その他</h3>
            <div class="detail-form">
                <label for="disclosure-date">公開日</label><br><input type="time" name="disclosure-date"><br>
                <label for="update-date">更新日</label><br><input type="time" name="update-date"><br>
                <label for="remarks">備考</label><br><textarea type="text" name="remarks"></textarea><br>
            </div>
        </div>
        <button class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(4)">戻る</button>
        <button class="submit-btn btn-main font-weight-bold mt-3" onclick="window.alert('test')">投稿</button>`;
    }
}

