document.addEventListener('DOMContentLoaded', function() {
    // フォーム要素を取得
    const enqueteForm = document.getElementById('enqueteForm');
    // メッセージ表示用のコンテナを取得
    const messageContainer = document.getElementById('message-container');

    if (enqueteForm) {
        // フォームが送信されたときのイベントリスナーを設定
        enqueteForm.addEventListener('submit', function(event) {
            // デフォルトのフォーム送信動作（ページリロード）をキャンセル
            event.preventDefault();

            // ここにフォームデータの処理（例えば、サーバーへの送信）を記述できます
            // 今回はメッセージ表示のみなので省略

            // フォームを非表示にする（任意）
            enqueteForm.style.display = 'none';

            // メッセージを表示
            messageContainer.textContent = 'アンケート協力ありがとう！！';
            messageContainer.style.display = 'block'; // 念のため表示を確実にする

            // オプション: 数秒後にメッセージを消す、またはフォームを元に戻す
            // setTimeout(() => {
            //     messageContainer.textContent = '';
            //     messageContainer.style.display = 'none';
            //     enqueteForm.style.display = 'block'; // フォームを再表示する場合
            // }, 5000); // 5秒後に消す例
        });
    }
});