package Estudiante;
public class Estudiante {
        int a;
        int b;
        public void setData(int c, int d) {
            a = c;
            b = d;
        }
        public void showData() {
            System.out.println("Valor de a =" + a);
            System.out.println("Valor de b =" + b);
        }
        public static void main(String args[]) {
            Estudiante s1 = new Estudiante();
            Estudiante s2 = new Estudiante();
            s1.setData(1, 2);
            s2.setData(3, 4);
            s1.showData();
            s2.showData();
            Estudiante s3;
            s3 = s2;
            s3.showData ();
            s2 = null;
            s3.showData ();
            s3 = null;
            s3.showData ();
        }
}
