import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';


describe('Test random function', () => {
  describe('number between 1000 & -1000', () => {
    const service = new HomeComponent();

    it('should return correct answer', () => {
      const result = service.randomFunctionNumber();
      expect(result).toBeLessThanOrEqual(1000);
    });

    it('should return correct answer', () => {
      const result2 = service.randomFunctionNumber();
      expect(result2).toBeGreaterThanOrEqual(-1000);
    });
  });
});


describe('verify divisible number', () => {
  describe('number divisible by 3', () => {
    const service = new HomeComponent();
    it('test 1 should return wrong answer', () => {
      const result = service.divisibleNumber(10,3);
      expect(result).toBe(false);
    });

    it('test 2 should return wrong answer', () => {
      const result = service.divisibleNumber(-88,3);
      expect(result).toBe(false);
    });

    it('test 3 should return correct answer', () => {
      const result = service.divisibleNumber(9,3);
      expect(result).toBe(true);
    });

    it('test 4 should return correct answer', () => {
      const result = service.divisibleNumber(-300,3);
      expect(result).toBe(true);
    });
  });

  describe('number divisible by 5', () => {
    const service = new HomeComponent();

    it('test 1 should return wrong answer', () => {
      const result = service.divisibleNumber(42,5);
      expect(result).toBe(false);
    });

    it('test 2 should return wrong answer', () => {
      const result = service.divisibleNumber(-87,5);
      expect(result).toBe(false);
    });

    it('test 3 should return wrong answer', () => {
      const result = service.divisibleNumber(25,5);
      expect(result).toBe(true);
    });

    it('test 4 should return wrong answer', () => {
      const result = service.divisibleNumber(-150,5);
      expect(result).toBe(true);
    });
  });
});

describe('Test named function', () => {
  describe('name with random number', () => {
    const service = new HomeComponent();

    it('test 1 should return correct n', () => {
      const result = service.nameNumberFunction(1);
      expect(result).toBe("n");
    });

    it('test 2 should return correct Forme', () => {
      const result = service.nameNumberFunction(40);
      expect(result).toBe("Forme");
    });

    it('test 3 should return correct Geste', () => {
      const result = service.nameNumberFunction(-12);
      expect(result).toBe("Geste");
    });
  });
});
