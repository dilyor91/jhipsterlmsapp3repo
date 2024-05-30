package uz.momoit.lms_canvas.domain;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class SpecialityTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Speciality getSpecialitySample1() {
        return new Speciality().id(1L);
    }

    public static Speciality getSpecialitySample2() {
        return new Speciality().id(2L);
    }

    public static Speciality getSpecialityRandomSampleGenerator() {
        return new Speciality().id(longCount.incrementAndGet());
    }
}
