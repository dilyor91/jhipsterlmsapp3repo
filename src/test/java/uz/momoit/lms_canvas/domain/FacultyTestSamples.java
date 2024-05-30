package uz.momoit.lms_canvas.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class FacultyTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Faculty getFacultySample1() {
        return new Faculty().id(1L);
    }

    public static Faculty getFacultySample2() {
        return new Faculty().id(2L);
    }

    public static Faculty getFacultyRandomSampleGenerator() {
        return new Faculty().id(longCount.incrementAndGet());
    }
}
