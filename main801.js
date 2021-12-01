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

         ssml: '<speak><break time=\"2s\"/>801 <break time=\"2s\"/>802 <break time=\"2s\"/>803 <break time=\"2s\"/>804 <break time=\"2s\"/>805 <break time=\"2s\"/>806 <break time=\"2s\"/>807 <break time=\"2s\"/>808 <break time=\"2s\"/>809 <break time=\"2s\"/>810 <break time=\"2s\"/>811 <break time=\"2s\"/>812 <break time=\"2s\"/>813 <break time=\"2s\"/>814 <break time=\"2s\"/>815 <break time=\"2s\"/>816 <break time=\"2s\"/>817 <break time=\"2s\"/>818 <break time=\"2s\"/>819 <break time=\"2s\"/>820 <break time=\"2s\"/>821 <break time=\"2s\"/>822 <break time=\"2s\"/>823 <break time=\"2s\"/>824 <break time=\"2s\"/>825 <break time=\"2s\"/>826 <break time=\"2s\"/>827 <break time=\"2s\"/>828 <break time=\"2s\"/>829 <break time=\"2s\"/>830 <break time=\"2s\"/>831 <break time=\"2s\"/>832 <break time=\"2s\"/>833 <break time=\"2s\"/>834 <break time=\"2s\"/>835 <break time=\"2s\"/>836 <break time=\"2s\"/>837 <break time=\"2s\"/>838 <break time=\"2s\"/>839 <break time=\"2s\"/>840 <break time=\"2s\"/>841 <break time=\"2s\"/>842 <break time=\"2s\"/>843 <break time=\"2s\"/>844 <break time=\"2s\"/>845 <break time=\"2s\"/>846 <break time=\"2s\"/>847 <break time=\"2s\"/>848 <break time=\"2s\"/>849 <break time=\"2s\"/>850 <break time=\"2s\"/>851 <break time=\"2s\"/>852 <break time=\"2s\"/>853 <break time=\"2s\"/>854 <break time=\"2s\"/>855 <break time=\"2s\"/>856 <break time=\"2s\"/>857 <break time=\"2s\"/>858 <break time=\"2s\"/>859 <break time=\"2s\"/>860 <break time=\"2s\"/>861 <break time=\"2s\"/>862 <break time=\"2s\"/>863 <break time=\"2s\"/>864 <break time=\"2s\"/>865 <break time=\"2s\"/>866 <break time=\"2s\"/>867 <break time=\"2s\"/>868 <break time=\"2s\"/>869 <break time=\"2s\"/>870 <break time=\"2s\"/>871 <break time=\"2s\"/>872 <break time=\"2s\"/>873 <break time=\"2s\"/>874 <break time=\"2s\"/>875 <break time=\"2s\"/>876 <break time=\"2s\"/>877 <break time=\"2s\"/>878 <break time=\"2s\"/>879 <break time=\"2s\"/>880 <break time=\"2s\"/>881 <break time=\"2s\"/>882 <break time=\"2s\"/>883 <break time=\"2s\"/>884 <break time=\"2s\"/>885 <break time=\"2s\"/>886 <break time=\"2s\"/>887 <break time=\"2s\"/>888 <break time=\"2s\"/>889 <break time=\"2s\"/>890 <break time=\"2s\"/>891 <break time=\"2s\"/>892 <break time=\"2s\"/>893 <break time=\"2s\"/>894 <break time=\"2s\"/>895 <break time=\"2s\"/>896 <break time=\"2s\"/>897 <break time=\"2s\"/>898 <break time=\"2s\"/>899 <break time=\"2s\"/>900 <break time=\"2s\"/>901 <break time=\"2s\"/>902 <break time=\"2s\"/>903 <break time=\"2s\"/>904 <break time=\"2s\"/>905 <break time=\"2s\"/>906 <break time=\"2s\"/>907 <break time=\"2s\"/>908 <break time=\"2s\"/>909 <break time=\"2s\"/>910 <break time=\"2s\"/>911 <break time=\"2s\"/>912 <break time=\"2s\"/>913 <break time=\"2s\"/>914 <break time=\"2s\"/>915 <break time=\"2s\"/>916 <break time=\"2s\"/>917 <break time=\"2s\"/>918 <break time=\"2s\"/>919 <break time=\"2s\"/>920 <break time=\"2s\"/>921 <break time=\"2s\"/>922 <break time=\"2s\"/>923 <break time=\"2s\"/>924 <break time=\"2s\"/>925 <break time=\"2s\"/>926 <break time=\"2s\"/>927 <break time=\"2s\"/>928 <break time=\"2s\"/>929 <break time=\"2s\"/>930 <break time=\"2s\"/>931 <break time=\"2s\"/>932 <break time=\"2s\"/>933 <break time=\"2s\"/>934 <break time=\"2s\"/>935 <break time=\"2s\"/>936 <break time=\"2s\"/>937 <break time=\"2s\"/>938 <break time=\"2s\"/>939 <break time=\"2s\"/>940 <break time=\"2s\"/>941 <break time=\"2s\"/>942 <break time=\"2s\"/>943 <break time=\"2s\"/>944 <break time=\"2s\"/>945 <break time=\"2s\"/>946 <break time=\"2s\"/>947 <break time=\"2s\"/>948 <break time=\"2s\"/>949 <break time=\"2s\"/>950 <break time=\"2s\"/>951 <break time=\"2s\"/>952 <break time=\"2s\"/>953 <break time=\"2s\"/>954 <break time=\"2s\"/>955 <break time=\"2s\"/>956 <break time=\"2s\"/>957 <break time=\"2s\"/>958 <break time=\"2s\"/>959 <break time=\"2s\"/>960 <break time=\"2s\"/>961 <break time=\"2s\"/>962 <break time=\"2s\"/>963 <break time=\"2s\"/>964 <break time=\"2s\"/>965 <break time=\"2s\"/>966 <break time=\"2s\"/>967 <break time=\"2s\"/>968 <break time=\"2s\"/>969 <break time=\"2s\"/>970 <break time=\"2s\"/>971 <break time=\"2s\"/>972 <break time=\"2s\"/>973 <break time=\"2s\"/>974 <break time=\"2s\"/>975 <break time=\"2s\"/>976 <break time=\"2s\"/>977 <break time=\"2s\"/>978 <break time=\"2s\"/>979 <break time=\"2s\"/>980 <break time=\"2s\"/>981 <break time=\"2s\"/>982 <break time=\"2s\"/>983 <break time=\"2s\"/>984 <break time=\"2s\"/>985 <break time=\"2s\"/>986 <break time=\"2s\"/>987 <break time=\"2s\"/>988 <break time=\"2s\"/>989 <break time=\"2s\"/>990 <break time=\"2s\"/>991 <break time=\"2s\"/>992 <break time=\"2s\"/>993 <break time=\"2s\"/>994 <break time=\"2s\"/>995 <break time=\"2s\"/>996 <break time=\"2s\"/>997 <break time=\"2s\"/>998 <break time=\"2s\"/>999 <break time=\"2s\"/>1000 .</speak>'


        },
        // Select the language and SSML voice gender (optional)
        voice: {

          languageCode: 'pt-PT',
          ssmlGender: 'FEMALE',
          name: "pt-PT-Wavenet-A"

            // languageCode: 'bn-IN',
            // ssmlGender: 'FEMALE',
            // name: "bn-IN-Wavenet-A"

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
      const start = 801;
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