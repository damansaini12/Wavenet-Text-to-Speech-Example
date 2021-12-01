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
     
         ssml: '<speak><break time=\"2s\"/>601 <break time=\"2s\"/>602 <break time=\"2s\"/>603 <break time=\"2s\"/>604 <break time=\"2s\"/>605 <break time=\"2s\"/>606 <break time=\"2s\"/>607 <break time=\"2s\"/>608 <break time=\"2s\"/>609 <break time=\"2s\"/>610 <break time=\"2s\"/>611 <break time=\"2s\"/>612 <break time=\"2s\"/>613 <break time=\"2s\"/>614 <break time=\"2s\"/>615 <break time=\"2s\"/>616 <break time=\"2s\"/>617 <break time=\"2s\"/>618 <break time=\"2s\"/>619 <break time=\"2s\"/>620 <break time=\"2s\"/>621 <break time=\"2s\"/>622 <break time=\"2s\"/>623 <break time=\"2s\"/>624 <break time=\"2s\"/>625 <break time=\"2s\"/>626 <break time=\"2s\"/>627 <break time=\"2s\"/>628 <break time=\"2s\"/>629 <break time=\"2s\"/>630 <break time=\"2s\"/>631 <break time=\"2s\"/>632 <break time=\"2s\"/>633 <break time=\"2s\"/>634 <break time=\"2s\"/>635 <break time=\"2s\"/>636 <break time=\"2s\"/>637 <break time=\"2s\"/>638 <break time=\"2s\"/>639 <break time=\"2s\"/>640 <break time=\"2s\"/>641 <break time=\"2s\"/>642 <break time=\"2s\"/>643 <break time=\"2s\"/>644 <break time=\"2s\"/>645 <break time=\"2s\"/>646 <break time=\"2s\"/>647 <break time=\"2s\"/>648 <break time=\"2s\"/>649 <break time=\"2s\"/>650 <break time=\"2s\"/>651 <break time=\"2s\"/>652 <break time=\"2s\"/>653 <break time=\"2s\"/>654 <break time=\"2s\"/>655 <break time=\"2s\"/>656 <break time=\"2s\"/>657 <break time=\"2s\"/>658 <break time=\"2s\"/>659 <break time=\"2s\"/>660 <break time=\"2s\"/>661 <break time=\"2s\"/>662 <break time=\"2s\"/>663 <break time=\"2s\"/>664 <break time=\"2s\"/>665 <break time=\"2s\"/>666 <break time=\"2s\"/>667 <break time=\"2s\"/>668 <break time=\"2s\"/>669 <break time=\"2s\"/>670 <break time=\"2s\"/>671 <break time=\"2s\"/>672 <break time=\"2s\"/>673 <break time=\"2s\"/>674 <break time=\"2s\"/>675 <break time=\"2s\"/>676 <break time=\"2s\"/>677 <break time=\"2s\"/>678 <break time=\"2s\"/>679 <break time=\"2s\"/>680 <break time=\"2s\"/>681 <break time=\"2s\"/>682 <break time=\"2s\"/>683 <break time=\"2s\"/>684 <break time=\"2s\"/>685 <break time=\"2s\"/>686 <break time=\"2s\"/>687 <break time=\"2s\"/>688 <break time=\"2s\"/>689 <break time=\"2s\"/>690 <break time=\"2s\"/>691 <break time=\"2s\"/>692 <break time=\"2s\"/>693 <break time=\"2s\"/>694 <break time=\"2s\"/>695 <break time=\"2s\"/>696 <break time=\"2s\"/>697 <break time=\"2s\"/>698 <break time=\"2s\"/>699 <break time=\"2s\"/>700 <break time=\"2s\"/>701 <break time=\"2s\"/>702 <break time=\"2s\"/>703 <break time=\"2s\"/>704 <break time=\"2s\"/>705 <break time=\"2s\"/>706 <break time=\"2s\"/>707 <break time=\"2s\"/>708 <break time=\"2s\"/>709 <break time=\"2s\"/>710 <break time=\"2s\"/>711 <break time=\"2s\"/>712 <break time=\"2s\"/>713 <break time=\"2s\"/>714 <break time=\"2s\"/>715 <break time=\"2s\"/>716 <break time=\"2s\"/>717 <break time=\"2s\"/>718 <break time=\"2s\"/>719 <break time=\"2s\"/>720 <break time=\"2s\"/>721 <break time=\"2s\"/>722 <break time=\"2s\"/>723 <break time=\"2s\"/>724 <break time=\"2s\"/>725 <break time=\"2s\"/>726 <break time=\"2s\"/>727 <break time=\"2s\"/>728 <break time=\"2s\"/>729 <break time=\"2s\"/>730 <break time=\"2s\"/>731 <break time=\"2s\"/>732 <break time=\"2s\"/>733 <break time=\"2s\"/>734 <break time=\"2s\"/>735 <break time=\"2s\"/>736 <break time=\"2s\"/>737 <break time=\"2s\"/>738 <break time=\"2s\"/>739 <break time=\"2s\"/>740 <break time=\"2s\"/>741 <break time=\"2s\"/>742 <break time=\"2s\"/>743 <break time=\"2s\"/>744 <break time=\"2s\"/>745 <break time=\"2s\"/>746 <break time=\"2s\"/>747 <break time=\"2s\"/>748 <break time=\"2s\"/>749 <break time=\"2s\"/>750 <break time=\"2s\"/>751 <break time=\"2s\"/>752 <break time=\"2s\"/>753 <break time=\"2s\"/>754 <break time=\"2s\"/>755 <break time=\"2s\"/>756 <break time=\"2s\"/>757 <break time=\"2s\"/>758 <break time=\"2s\"/>759 <break time=\"2s\"/>760 <break time=\"2s\"/>761 <break time=\"2s\"/>762 <break time=\"2s\"/>763 <break time=\"2s\"/>764 <break time=\"2s\"/>765 <break time=\"2s\"/>766 <break time=\"2s\"/>767 <break time=\"2s\"/>768 <break time=\"2s\"/>769 <break time=\"2s\"/>770 <break time=\"2s\"/>771 <break time=\"2s\"/>772 <break time=\"2s\"/>773 <break time=\"2s\"/>774 <break time=\"2s\"/>775 <break time=\"2s\"/>776 <break time=\"2s\"/>777 <break time=\"2s\"/>778 <break time=\"2s\"/>779 <break time=\"2s\"/>780 <break time=\"2s\"/>781 <break time=\"2s\"/>782 <break time=\"2s\"/>783 <break time=\"2s\"/>784 <break time=\"2s\"/>785 <break time=\"2s\"/>786 <break time=\"2s\"/>787 <break time=\"2s\"/>788 <break time=\"2s\"/>789 <break time=\"2s\"/>790 <break time=\"2s\"/>791 <break time=\"2s\"/>792 <break time=\"2s\"/>793 <break time=\"2s\"/>794 <break time=\"2s\"/>795 <break time=\"2s\"/>796 <break time=\"2s\"/>797 <break time=\"2s\"/>798 <break time=\"2s\"/>799 <break time=\"2s\"/>800 .</speak>'



        },
        // Select the language and SSML voice gender (optional)
        voice: {
          languageCode: 'pt-PT',
          ssmlGender: 'FEMALE',
          name: "pt-PT-Wavenet-D"

            // languageCode: 'bn-IN',
            // ssmlGender: 'MALE',
            // name: "bn-IN-Wavenet-B"

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
      const start = 601;
      // Write the binary audio content to a local file
      const writeFile = util.promisify(fs.writeFile);
      

     await writeFile('./ru/' + (start) + '-' + (start + 199) + '.mp3', response.audioContent, 'binary');

      console.log('Audio content written to file: output.mp3');
      console.log(start);

      index++;

      charCount = 0;
      textChunk = "";

    }
  }
}());