// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

(async function () {

    // The text to synthesize
    var text = fs.readFileSync('./text.txt', 'utf-8');
    var newArr = text.match(/[^\.]+\./g);

    var charCount = 0;
    var textChunk = "";
    var index = 0;

    for (var n = 0; n < newArr.length; n++) {

        charCount += newArr[n].length;
        textChunk = textChunk + newArr[n];

        console.log(charCount);



        if (charCount > 4000 || n == newArr.length - 1) {

            console.log(textChunk);

            // Construct the request
            const request = {

                input: {

                    ssml: '<speak><break time=\"2s\"/>401 <break time=\"2s\"/>402 <break time=\"2s\"/>403 <break time=\"2s\"/>404 <break time=\"2s\"/>405 <break time=\"2s\"/>406 <break time=\"2s\"/>407 <break time=\"2s\"/>408 <break time=\"2s\"/>409 <break time=\"2s\"/>410 <break time=\"2s\"/>411 <break time=\"2s\"/>412 <break time=\"2s\"/>413 <break time=\"2s\"/>414 <break time=\"2s\"/>415 <break time=\"2s\"/>416 <break time=\"2s\"/>417 <break time=\"2s\"/>418 <break time=\"2s\"/>419 <break time=\"2s\"/>420 <break time=\"2s\"/>421 <break time=\"2s\"/>422 <break time=\"2s\"/>423 <break time=\"2s\"/>424 <break time=\"2s\"/>425 <break time=\"2s\"/>426 <break time=\"2s\"/>427 <break time=\"2s\"/>428 <break time=\"2s\"/>429 <break time=\"2s\"/>430 <break time=\"2s\"/>431 <break time=\"2s\"/>432 <break time=\"2s\"/>433 <break time=\"2s\"/>434 <break time=\"2s\"/>435 <break time=\"2s\"/>436 <break time=\"2s\"/>437 <break time=\"2s\"/>438 <break time=\"2s\"/>439 <break time=\"2s\"/>440 <break time=\"2s\"/>441 <break time=\"2s\"/>442 <break time=\"2s\"/>443 <break time=\"2s\"/>444 <break time=\"2s\"/>445 <break time=\"2s\"/>446 <break time=\"2s\"/>447 <break time=\"2s\"/>448 <break time=\"2s\"/>449 <break time=\"2s\"/>450 <break time=\"2s\"/>451 <break time=\"2s\"/>452 <break time=\"2s\"/>453 <break time=\"2s\"/>454 <break time=\"2s\"/>455 <break time=\"2s\"/>456 <break time=\"2s\"/>457 <break time=\"2s\"/>458 <break time=\"2s\"/>459 <break time=\"2s\"/>460 <break time=\"2s\"/>461 <break time=\"2s\"/>462 <break time=\"2s\"/>463 <break time=\"2s\"/>464 <break time=\"2s\"/>465 <break time=\"2s\"/>466 <break time=\"2s\"/>467 <break time=\"2s\"/>468 <break time=\"2s\"/>469 <break time=\"2s\"/>470 <break time=\"2s\"/>471 <break time=\"2s\"/>472 <break time=\"2s\"/>473 <break time=\"2s\"/>474 <break time=\"2s\"/>475 <break time=\"2s\"/>476 <break time=\"2s\"/>477 <break time=\"2s\"/>478 <break time=\"2s\"/>479 <break time=\"2s\"/>480 <break time=\"2s\"/>481 <break time=\"2s\"/>482 <break time=\"2s\"/>483 <break time=\"2s\"/>484 <break time=\"2s\"/>485 <break time=\"2s\"/>486 <break time=\"2s\"/>487 <break time=\"2s\"/>488 <break time=\"2s\"/>489 <break time=\"2s\"/>490 <break time=\"2s\"/>491 <break time=\"2s\"/>492 <break time=\"2s\"/>493 <break time=\"2s\"/>494 <break time=\"2s\"/>495 <break time=\"2s\"/>496 <break time=\"2s\"/>497 <break time=\"2s\"/>498 <break time=\"2s\"/>499 <break time=\"2s\"/>500 <break time=\"2s\"/>501 <break time=\"2s\"/>502 <break time=\"2s\"/>503 <break time=\"2s\"/>504 <break time=\"2s\"/>505 <break time=\"2s\"/>506 <break time=\"2s\"/>507 <break time=\"2s\"/>508 <break time=\"2s\"/>509 <break time=\"2s\"/>510 <break time=\"2s\"/>511 <break time=\"2s\"/>512 <break time=\"2s\"/>513 <break time=\"2s\"/>514 <break time=\"2s\"/>515 <break time=\"2s\"/>516 <break time=\"2s\"/>517 <break time=\"2s\"/>518 <break time=\"2s\"/>519 <break time=\"2s\"/>520 <break time=\"2s\"/>521 <break time=\"2s\"/>522 <break time=\"2s\"/>523 <break time=\"2s\"/>524 <break time=\"2s\"/>525 <break time=\"2s\"/>526 <break time=\"2s\"/>527 <break time=\"2s\"/>528 <break time=\"2s\"/>529 <break time=\"2s\"/>530 <break time=\"2s\"/>531 <break time=\"2s\"/>532 <break time=\"2s\"/>533 <break time=\"2s\"/>534 <break time=\"2s\"/>535 <break time=\"2s\"/>536 <break time=\"2s\"/>537 <break time=\"2s\"/>538 <break time=\"2s\"/>539 <break time=\"2s\"/>540 <break time=\"2s\"/>541 <break time=\"2s\"/>542 <break time=\"2s\"/>543 <break time=\"2s\"/>544 <break time=\"2s\"/>545 <break time=\"2s\"/>546 <break time=\"2s\"/>547 <break time=\"2s\"/>548 <break time=\"2s\"/>549 <break time=\"2s\"/>550 <break time=\"2s\"/>551 <break time=\"2s\"/>552 <break time=\"2s\"/>553 <break time=\"2s\"/>554 <break time=\"2s\"/>555 <break time=\"2s\"/>556 <break time=\"2s\"/>557 <break time=\"2s\"/>558 <break time=\"2s\"/>559 <break time=\"2s\"/>560 <break time=\"2s\"/>561 <break time=\"2s\"/>562 <break time=\"2s\"/>563 <break time=\"2s\"/>564 <break time=\"2s\"/>565 <break time=\"2s\"/>566 <break time=\"2s\"/>567 <break time=\"2s\"/>568 <break time=\"2s\"/>569 <break time=\"2s\"/>570 <break time=\"2s\"/>571 <break time=\"2s\"/>572 <break time=\"2s\"/>573 <break time=\"2s\"/>574 <break time=\"2s\"/>575 <break time=\"2s\"/>576 <break time=\"2s\"/>577 <break time=\"2s\"/>578 <break time=\"2s\"/>579 <break time=\"2s\"/>580 <break time=\"2s\"/>581 <break time=\"2s\"/>582 <break time=\"2s\"/>583 <break time=\"2s\"/>584 <break time=\"2s\"/>585 <break time=\"2s\"/>586 <break time=\"2s\"/>587 <break time=\"2s\"/>588 <break time=\"2s\"/>589 <break time=\"2s\"/>590 <break time=\"2s\"/>591 <break time=\"2s\"/>592 <break time=\"2s\"/>593 <break time=\"2s\"/>594 <break time=\"2s\"/>595 <break time=\"2s\"/>596 <break time=\"2s\"/>597 <break time=\"2s\"/>598 <break time=\"2s\"/>599 <break time=\"2s\"/>600 .</speak>'



                },
                // Select the language and SSML voice gender (optional)
                voice: {
                    languageCode: 'pt-PT',
                    ssmlGender: 'MALE',
                    name: "pt-PT-Wavenet-C"

                    //   'languageCode':'en-us',
                    //  'name':'en-US-Standard-B',
                    //  'ssmlGender':'MALE'
                },
                // select the type of audio encoding
                audioConfig: {
                    'audioEncoding': 'MP3'
                },
            };

            // Performs the text-to-speech request
            const [response] = await client.synthesizeSpeech(request);

            console.log(response);
            const start = 401;
            // Write the binary audio content to a local file
            const writeFile = util.promisify(fs.writeFile);

            // await writeFile('./ru/' + (start) + '-' + (start + 200) + '.mp3', response.audioContent, 'binary');

            await writeFile('./ru/' + (start) + '-' + (start + 199) + '.mp3', response.audioContent, 'binary');

            console.log('Audio content written to file: output.mp3');
            console.log(start);

            index++;

            charCount = 0;
            textChunk = "";

        }
    }
}());