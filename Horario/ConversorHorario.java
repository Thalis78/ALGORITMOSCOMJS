import java.util.Scanner;

public class ConversorHorario {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("DIGITE UM HORARIO:");
        String Horario = scanner.nextLine().toUpperCase();
        String[] Horas;
        try {
            Horas = Horario.split(" ");
            HorarioAmericano(Horas);
        } catch (Exception e) {
            Horas = Horario.split(":");
            HorarioBrasileiro(Horas);
        }

    }
    public static void HorarioAmericano(String[] Horas){
        String HorasInformada = Horas[0];
        String[] HorasSeparada = HorasInformada.split(":");
        if(Horas[1].equals("AM")){
            System.out.println(Horas[0]);
        }else{
            System.out.println(Integer.parseInt(HorasSeparada[0])+ 12+":"+HorasSeparada[1]+":"+HorasSeparada[2]);
        }
    }
    public static void HorarioBrasileiro(String[] Horas){
        if(Integer.parseInt(Horas[0]) >= 12){
            System.out.println(Integer.parseInt(Horas[0])- 12+":"+Horas[1]+":"+Horas[2]+" PM");
        }else{
            System.out.println(Integer.parseInt(Horas[0])+":"+Horas[1]+":"+Horas[2]+" AM");
        }
    }
}
