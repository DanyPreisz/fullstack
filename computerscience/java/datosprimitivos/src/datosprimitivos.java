public class datosprimitivos {
    // Ejemplo utilizando byte
    public static void main(String[] args) {
        byte b1 = 100; // Declara una variable byte y le asigna un valor
        byte b2 = 50;
        byte b3 = (byte) (b1 + b2); // Suma dos valores byte y almacena el resultado en un byte

        System.out.println("Valor de b1: " + b1); // Imprime el valor de b1
        System.out.println("Valor de b2: " + b2); // Imprime el valor de b2
        System.out.println("Valor de b3: " + b3); // Imprime el valor de b3

// Ejemplo utilizando Byte

        Byte b4 = new Byte((byte) 10); // Crea un objeto Byte y lo inicializa con un valor de tipo byte
        Byte b5 = new Byte("20"); // Crea un objeto Byte y lo inicializa con un valor de tipo String
        Byte b6 = Byte.valueOf("30"); // Crea un objeto Byte utilizando el método estático valueOf()

        System.out.println("Valor de b4: " + b4); // Imprime el valor de b4
        System.out.println("Valor de b5: " + b5); // Imprime el valor de b5
        System.out.println("Valor de b6: " + b6); // Imprime el valor de b6
    }
}
