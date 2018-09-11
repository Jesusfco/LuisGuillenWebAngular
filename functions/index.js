const express = require('express');
const app = express();
const fetch = require('node-fetch');
const url = require('url');


const appUrl = 'http://www.luisguillen.com.mx/';
const renderUrl = 'https://render-tron.appspot.com/render'

app.get('*', (req, res) => {

    res.send('hola mundo');

    // const isBot = detectBot(req.headers['user-agent']);

    // if (isBot) {

    //     const botUrl = generateUrl(req);

    //     // fetch(`${renderUrl}/${botUrl}`)
    //     fetch(`${renderUrl}/${appUrl}`)
    //         .then(res => res.text())
    //         .then(body => {

    //             res.set('Cache-Control', 'public, max-age:300, s-maxage=600');
    //             res.set('Vary', 'User-Agent');

    //             res.send(body.toString());

    //         });



    // } else {

    //     fetch(appUrl)
    //         .then(res => res.text())
    //         .then(body => {
    //             res.send(body.toString());
    //         });

    // }

});

app.listen(2400, () => console.log('EXAMPLE APP LISTENTING PORT 2400!'));

function detectBot(userAgent) {

    const bots = [
        'googlebot',
        'bingbot',
        'yandexbot',
        'duckduckbot',
        'slurp',

        'twitterbot',
        'facebookexternalhit',
        'linkedinbot',
        'embedly',
        'pinterest',
        'slackbot',
        'vkShare',
        'facebot',
        'outbrain',
        'W3C_Validator',
    ]

    const agent = userAgent.toLowerCase()

    for (const bot of bots) {
        if (agent.indexOf(bot) > -1) {
            console.log('Bot detected', bot, agent)
            return true
        }
    }

    return false

}