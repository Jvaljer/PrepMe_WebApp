import java.util.HashMap;
import java.util.Scanner;

public class PrepMe_App {

    public static void main(String[] args) {
        HashMap<String, String[]> stretchesMap = new HashMap<>();
        stretchesMap.put("Skate", new String[] { "Stretch1", "Stretch2", "Stretch3" });
        stretchesMap.put("Gym", new String[] { "Stretch1", "Stretch2", "Stretch3" });
        stretchesMap.put("Calisthenics", new String[] { "Stretch1", "Stretch2", "Stretch3" });

        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose an activity by typing a number between 1 and 3:");
        System.out.println("1. Skate\n2. Gym\n3. Calisthenics");

        int choice = scanner.nextInt();
        scanner.nextLine();

        String activity;
        switch (choice) {
            case 1 -> activity = "Skate";
            case 2 -> activity = "Gym";
            case 3 -> activity = "Calisthenics";
            default -> {
                System.out.println("Invalid choice. Exiting.");
                return;
            }
        }

        String[] stretches = stretchesMap.get(activity);
        System.out.println("You chose: " + activity);
        System.out.println("Press Enter/Space to start your stretches!");

        for (String stretch : stretches) {
            System.out.println(stretch);
            scanner.nextLine();
        }

        System.out.println("Bravo! You're done with the stretching :)");

        scanner.close();
    }
}
