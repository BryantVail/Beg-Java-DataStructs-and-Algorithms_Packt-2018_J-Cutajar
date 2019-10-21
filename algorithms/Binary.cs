
namespace Algorithms {
    public class Binary{
        public static BinaryToInt(string binaryString){

            int multiplier = 1;
            int total = 0;

            for(int i = 0; i < intString.Length; i++){
                //get bit from end of string; (length - i) 
                string currentBitValue = binaryString[binaryString.Length - i];
                if(currentBitValue == 1){
                    total += multiplier;
                }
                multiplier *=2;
            }
            return total;
        }
    }
}


