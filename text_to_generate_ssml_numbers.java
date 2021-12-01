import java.util.*;

public class text_to_generate_ssml_numbers {

    public static void main(String[] args) {
        String text = "ssml: ";
        text += "'<speak>";
        System.out.print("ssml: '<speak>");

        int start = 801;
        int end = start + 200; //until 999 add 200 and then at 1000 only add 198.  Minus 6 for the "ssml: "

        for (int i = start; i < end; i++) {
            text += "<break time=\\\"2s\\\"/>" + i + " ";
            System.out.print("<break time=\\\"2s\\\"/>" + i + " ");

        }
        System.out.print(".</speak>'");
        text += "'.</speak>";

        char[] c = text.toCharArray();

        System.out.println("\n\n" +c.length);
        System.out.println("hello");
    }

}

