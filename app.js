const { LineBot } = require('bottender');

const bot = new LineBot({
  channelSecret: 'dc9d4e994b325bd5bdddd2e4db7a0793',
  accessToken: 'uQSjiQSouZJzJnuaGgboNEz0okjz27cFqNKu2gCZyMw7oPrDUc9RaMHjxFezVwnLhA8spYgu6JnbKaD19df5wOHIBVaj+e+nkg2wI+jyx8bvolC05MCkvS3F7aGqfOr6/Jzd3dJ+tsEdbbIjrxBsuwdB04t89/1O/w1cDnyilFU=',
});

bot.onEvent(async context => {
    if (context.event.isFollow) {
      await context.sendText('Hello, welcome to this bot!');
    } else if (context.event.isText && context.event.text === 'How are you?') {
      await context.sendText('I am fine.');
    } else {
      await context.sendText('I do not understand.');
    }
  });