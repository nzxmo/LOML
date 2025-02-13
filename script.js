import java.awt.*;
import javax.swing.*;

public class SimpleFlower extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;

        // Enable anti-aliasing
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

        // Draw petals
        g2d.setColor(Color.RED);
        for (int i = 0; i < 6; i++) {
            double angle = Math.toRadians(i * 60);
            int x = (int) (50 + 30 * Math.cos(angle));
            int y = (int) (50 + 30 * Math.sin(angle));
            g2d.fillOval(x, y, 40, 60);
        }

        // Draw flower center
        g2d.setColor(Color.YELLOW);
        g2d.fillOval(50, 50, 30, 30);

        // Draw stem
        g2d.setColor(Color.GREEN);
        g2d.fillRect(63, 80, 10, 100);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Simple Flower");
            SimpleFlower flower = new SimpleFlower();
            frame.add(flower);
            frame.setSize(200, 250);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setVisible(true);
        });
    }
}

