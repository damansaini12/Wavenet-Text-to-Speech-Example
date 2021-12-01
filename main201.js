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

                    ssml: '<speak><break time=\"2s\"/>201 <break time=\"2s\"/>202 <break time=\"2s\"/>203 <break time=\"2s\"/>204 <break time=\"2s\"/>205 <break time=\"2s\"/>206 <break time=\"2s\"/>207 <break time=\"2s\"/>208 <break time=\"2s\"/>209 <break time=\"2s\"/>210 <break time=\"2s\"/>211 <break time=\"2s\"/>212 <break time=\"2s\"/>213 <break time=\"2s\"/>214 <break time=\"2s\"/>215 <break time=\"2s\"/>216 <break time=\"2s\"/>217 <break time=\"2s\"/>218 <break time=\"2s\"/>219 <break time=\"2s\"/>220 <break time=\"2s\"/>221 <break time=\"2s\"/>222 <break time=\"2s\"/>223 <break time=\"2s\"/>224 <break time=\"2s\"/>225 <break time=\"2s\"/>226 <break time=\"2s\"/>227 <break time=\"2s\"/>228 <break time=\"2s\"/>229 <break time=\"2s\"/>230 <break time=\"2s\"/>231 <break time=\"2s\"/>232 <break time=\"2s\"/>233 <break time=\"2s\"/>234 <break time=\"2s\"/>235 <break time=\"2s\"/>236 <break time=\"2s\"/>237 <break time=\"2s\"/>238 <break time=\"2s\"/>239 <break time=\"2s\"/>240 <break time=\"2s\"/>241 <break time=\"2s\"/>242 <break time=\"2s\"/>243 <break time=\"2s\"/>244 <break time=\"2s\"/>245 <break time=\"2s\"/>246 <break time=\"2s\"/>247 <break time=\"2s\"/>248 <break time=\"2s\"/>249 <break time=\"2s\"/>250 <break time=\"2s\"/>251 <break time=\"2s\"/>252 <break time=\"2s\"/>253 <break time=\"2s\"/>254 <break time=\"2s\"/>255 <break time=\"2s\"/>256 <break time=\"2s\"/>257 <break time=\"2s\"/>258 <break time=\"2s\"/>259 <break time=\"2s\"/>260 <break time=\"2s\"/>261 <break time=\"2s\"/>262 <break time=\"2s\"/>263 <break time=\"2s\"/>264 <break time=\"2s\"/>265 <break time=\"2s\"/>266 <break time=\"2s\"/>267 <break time=\"2s\"/>268 <break time=\"2s\"/>269 <break time=\"2s\"/>270 <break time=\"2s\"/>271 <break time=\"2s\"/>272 <break time=\"2s\"/>273 <break time=\"2s\"/>274 <break time=\"2s\"/>275 <break time=\"2s\"/>276 <break time=\"2s\"/>277 <break time=\"2s\"/>278 <break time=\"2s\"/>279 <break time=\"2s\"/>280 <break time=\"2s\"/>281 <break time=\"2s\"/>282 <break time=\"2s\"/>283 <break time=\"2s\"/>284 <break time=\"2s\"/>285 <break time=\"2s\"/>286 <break time=\"2s\"/>287 <break time=\"2s\"/>288 <break time=\"2s\"/>289 <break time=\"2s\"/>290 <break time=\"2s\"/>291 <break time=\"2s\"/>292 <break time=\"2s\"/>293 <break time=\"2s\"/>294 <break time=\"2s\"/>295 <break time=\"2s\"/>296 <break time=\"2s\"/>297 <break time=\"2s\"/>298 <break time=\"2s\"/>299 <break time=\"2s\"/>300 <break time=\"2s\"/>301 <break time=\"2s\"/>302 <break time=\"2s\"/>303 <break time=\"2s\"/>304 <break time=\"2s\"/>305 <break time=\"2s\"/>306 <break time=\"2s\"/>307 <break time=\"2s\"/>308 <break time=\"2s\"/>309 <break time=\"2s\"/>310 <break time=\"2s\"/>311 <break time=\"2s\"/>312 <break time=\"2s\"/>313 <break time=\"2s\"/>314 <break time=\"2s\"/>315 <break time=\"2s\"/>316 <break time=\"2s\"/>317 <break time=\"2s\"/>318 <break time=\"2s\"/>319 <break time=\"2s\"/>320 <break time=\"2s\"/>321 <break time=\"2s\"/>322 <break time=\"2s\"/>323 <break time=\"2s\"/>324 <break time=\"2s\"/>325 <break time=\"2s\"/>326 <break time=\"2s\"/>327 <break time=\"2s\"/>328 <break time=\"2s\"/>329 <break time=\"2s\"/>330 <break time=\"2s\"/>331 <break time=\"2s\"/>332 <break time=\"2s\"/>333 <break time=\"2s\"/>334 <break time=\"2s\"/>335 <break time=\"2s\"/>336 <break time=\"2s\"/>337 <break time=\"2s\"/>338 <break time=\"2s\"/>339 <break time=\"2s\"/>340 <break time=\"2s\"/>341 <break time=\"2s\"/>342 <break time=\"2s\"/>343 <break time=\"2s\"/>344 <break time=\"2s\"/>345 <break time=\"2s\"/>346 <break time=\"2s\"/>347 <break time=\"2s\"/>348 <break time=\"2s\"/>349 <break time=\"2s\"/>350 <break time=\"2s\"/>351 <break time=\"2s\"/>352 <break time=\"2s\"/>353 <break time=\"2s\"/>354 <break time=\"2s\"/>355 <break time=\"2s\"/>356 <break time=\"2s\"/>357 <break time=\"2s\"/>358 <break time=\"2s\"/>359 <break time=\"2s\"/>360 <break time=\"2s\"/>361 <break time=\"2s\"/>362 <break time=\"2s\"/>363 <break time=\"2s\"/>364 <break time=\"2s\"/>365 <break time=\"2s\"/>366 <break time=\"2s\"/>367 <break time=\"2s\"/>368 <break time=\"2s\"/>369 <break time=\"2s\"/>370 <break time=\"2s\"/>371 <break time=\"2s\"/>372 <break time=\"2s\"/>373 <break time=\"2s\"/>374 <break time=\"2s\"/>375 <break time=\"2s\"/>376 <break time=\"2s\"/>377 <break time=\"2s\"/>378 <break time=\"2s\"/>379 <break time=\"2s\"/>380 <break time=\"2s\"/>381 <break time=\"2s\"/>382 <break time=\"2s\"/>383 <break time=\"2s\"/>384 <break time=\"2s\"/>385 <break time=\"2s\"/>386 <break time=\"2s\"/>387 <break time=\"2s\"/>388 <break time=\"2s\"/>389 <break time=\"2s\"/>390 <break time=\"2s\"/>391 <break time=\"2s\"/>392 <break time=\"2s\"/>393 <break time=\"2s\"/>394 <break time=\"2s\"/>395 <break time=\"2s\"/>396 <break time=\"2s\"/>397 <break time=\"2s\"/>398 <break time=\"2s\"/>399 <break time=\"2s\"/>400 <break time=\"2s\"/>401 .</speak>'


                },
                // Select the language and SSML voice gender (optional)
                voice: {
                    languageCode: 'pt-PT',
                    ssmlGender: 'MALE',
                    name: "pt-PT-Wavenet-B"

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
            const start = 201;
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