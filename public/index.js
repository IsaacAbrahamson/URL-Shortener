vex.defaultOptions.className = 'vex-theme-default'

new Clipboard('.search-btn')

$(document).ready(() => {
  $('button').click(async () => {
    const longURL = $('#urlBox').val()

    let response = await fetch(`/api/new/${longURL}`)
    let data = await response.json()

    console.log(data)

    vex.dialog.open({
      message: `${data.originalUrl} has been shortened!`,
      input: [
        `<input name="short" type="text" value=${window.location.hostname + data.shortUrl} readonly>`,
      ].join(''),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: 'Visit URL' }),
        $.extend({}, vex.dialog.buttons.NO, { text: 'Back' }),
      ],
      callback: function (redirrect) {
        if (redirrect) window.location.href = data.shortUrl
      }
    })

  })
})