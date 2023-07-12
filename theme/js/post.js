// 郵便番号から住所を検索

let postValues = {}
function moveTonextQ(optionNum) {
    const progress_bar = document.getElementById("progressbar");
    const form_area = document.getElementById("form-area");

    if (optionNum === 1) {
        form_elements = document.querySelectorAll("#f1 input");
        form_elements.forEach(e => {
            label_name = e.previousElementSibling.previousElementSibling.textContent;
            postValues[label_name] = e.value;
        });

        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="active">日程情報</li>
        <li>住所情報</li>
        <li>料金情報</li>
        <li>主催者情報</li>
        <li>その他</li>`;

        let content_block = document.getElementById("f1");
        content_block.style.display = "none";
        let next_btn = document.getElementById("next-btn1");
        next_btn.style.display = "none"

        form_area.innerHTML += `
        <div id="f2" class="f2">
            <h3 class="form-item">日程情報</h3>
            <div class="detail-form">
                <label for="event-start-date">開始日</label><br><input type="date" name="event-start-date"><br>
                <label for="event-end-date">終了日</label><br><input type="date" name="event-end-date"><br>
                <label for="event-start-time">開始時間</label><br><input type="time" name="event-name"><br>
                <label for="event-end-time">終了時間</label><br><input type="time" name="event-name">
            </div>
        </div>
        <!--<button id="back-btn2" class="back-btn btn-main font-weight-bold mt-3" onclick="history.back()">戻る</button>-->
        <button id="next-btn2" class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(2)">次へ</button>`;

    } else if (optionNum === 2) {
        form_elements = document.querySelectorAll("#f2 input");
        form_elements.forEach(e => {
            label_name = e.previousElementSibling.previousElementSibling.textContent;
            postValues[label_name] = e.value;
        });

        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="active">住所情報</li>
        <li>料金情報</li>
        <li>主催者情報</li>
        <li>その他</li>`;

        let content_block = document.getElementById("f2");
        content_block.style.display = "none";
        let next_btn = document.getElementById("next-btn2");
        next_btn.style.display = "none"
        // let back_btn = document.getElementById("back-btn2");
        // back_btn.style.display = "none";

        form_area.innerHTML += `
        <div id="f3" class="f3">
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
        <!--<button id=back-btn3"" class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(1)">戻る</button>-->
        <button id="next-btn3" class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(3)">次へ</button>`;

    } else if (optionNum === 3) {
        form_elements = document.querySelectorAll("#f3 input");
        form_elements.forEach(e => {
            label_name = e.previousElementSibling.previousElementSibling.textContent;
            postValues[label_name] = e.value;
        });

        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="complete">住所情報</li>
        <li class="active">料金情報</li>
        <li>主催者情報</li>
        <li>その他</li>`;

        let content_block = document.getElementById("f3");
        content_block.style.display = "none";
        let next_btn = document.getElementById("next-btn3");
        next_btn.style.display = "none"
        // let back_btn = document.getElementById("back-btn3");
        // back_btn.style.display = "none";

        form_area.innerHTML += `
        <div id="f4" class="f4">
            <h3 class="form-item">料金情報</h3>
            <div class="detail-form">
                <label for="price(basic)">料金(基本)</label><br><input type="text" name="price(basic)"><br>
                <label for="price(detail)">料金(詳細)</label><br><input type="text" name="price(detail)"><br>
            </div>
        </div>
        <!--<button id="back-btn4" class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(2)">戻る</button>-->
        <button id="next-btn4" class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(4)">次へ</button>`;

    } else if (optionNum === 4) {
        form_elements = document.querySelectorAll("#f4 input");
        form_elements.forEach(e => {
            label_name = e.previousElementSibling.previousElementSibling.textContent;
            postValues[label_name] = e.value;
        });

        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="complete">住所情報</li>
        <li class="complete">料金情報</li>
        <li class="active">主催者情報</li>
        <li>その他</li>`;

        let content_block = document.getElementById("f4");
        content_block.style.display = "none";
        let next_btn = document.getElementById("next-btn4");
        next_btn.style.display = "none"
        // let back_btn = document.getElementById("back-btn4");
        // back_btn.style.display = "none";

        form_area.innerHTML += `
        <div id="f5" class="f5">
            <h3 class="form-item">主催者情報</h3>
            <div class="detail-form">
                <label for="organizer">主催者</label><br><input type="text" name="organizer"><br>
                <label for="contact-name">連絡先名称</label><br><input type="text" name="contact-name"><br>
                <label for="contact-tel">連絡先電話番号</label><br><input type="tel" name="contact-tel"><br>
            </div>
        </div>
        <!--<button id="back-btn5" class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(3)">戻る</button>-->
        <button id="next-btn5" class="next-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(5)">次へ</button>`;

    } else if (optionNum === 5) {
        form_elements = document.querySelectorAll("#f5 input");
        form_elements.forEach(e => {
            label_name = e.previousElementSibling.previousElementSibling.textContent;
            postValues[label_name] = e.value;
        });

        progress_bar.innerHTML = `
        <li class="complete">イベント情報</li>
        <li class="complete">日程情報</li>
        <li class="complete">住所情報</li>
        <li class="complete">料金情報</li>
        <li class="complete">主催者情報</li>
        <li class="active">その他</li>`;

        let content_block = document.getElementById("f5");
        content_block.style.display = "none";
        let next_btn = document.getElementById("next-btn5");
        next_btn.style.display = "none"
        // let back_btn = document.getElementById("back-btn5");
        // back_btn.style.display = "none";

        form_area.innerHTML += `
        <div id="f6" class="f6">
            <h3 class="form-item">その他</h3>
            <div class="detail-form">
                <label for="disclosure-date">公開日</label><br><input type="time" name="disclosure-date"><br>
                <label for="update-date">更新日</label><br><input type="time" name="update-date"><br>
                <label for="remarks">備考</label><br><textarea type="text" name="remarks"></textarea><br>
            </div>
        </div>
        <!--<button class="back-btn btn-main font-weight-bold mt-3" onclick="moveTonextQ(4)">戻る</button>-->
        <button class="submit-btn btn-main font-weight-bold mt-3">投稿</button>`;
    }
    console.log(postValues);
}

