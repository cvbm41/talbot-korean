  $('#send-contact-btn').click(function () {
    const name = $('#contact-name').val();
    const email = $('#contact-email').val();
    const phone = $('#contact-phone').val();
    const message = $('#contact-message').val();
    const needReply = $('#contact-need-reply').is(':checked');


    if (!name || !email || !message ) {
      alert("이름, 이메일, 문의내용이 필요해요");
      return;
    }

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      need_reply: needReply
    };

    $('#contact-modal-spinner').removeClass('d-none');

    $.ajax({
      url: "https://250204.aisystem64.org/api/articles/send_contact/",
    //   url: "http://127.0.0.1:8000/api/articles/send_contact/",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function (res) {
        $('#contact-message-response').text(res.message).css('color', 'green');
        setTimeout(() => {
          $('#contactModal').modal('hide');
          $('#contact-message-response').text('');
          $('#contact-name, #contact-email, #contact-phone, #contact-message').val('');
          $('#contact-need-reply').prop('checked', false);
        }, 5000);
      },
      error: function (err) {
        $('#contact-message-response').text('문의 전송에 실패했습니다. 다시 시도해주세요.').css('color', 'red');
      },
      complete: function () {
        $('#contact-modal-spinner').addClass('d-none');
      }
    });
  });

