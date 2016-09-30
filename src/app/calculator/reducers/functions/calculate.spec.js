import calculate from "./calculate";

describe("Calculate test", function() {
    beforeEach(function() {
        this.testState = {
            result: 3,
            inputNum: 2
        };
    });

    it("should return 5 if 3+2", function() {
        this.testState.operation = "+";

        let result = calculate(this.testState);

        expect(result).toEqual(5);
    });

    it("should return 1 if 3-2", function() {
        this.testState.operation = "-";

        let result = calculate(this.testState);

        expect(result).toEqual(1);
    });

    it("should return 6 if 3*2", function() {
        this.testState.operation = "×";

        let result = calculate(this.testState);

        expect(result).toEqual(6);
    });

    it("should return 1.5 if 3/2", function() {
        this.testState.operation = "÷";

        let result = calculate(this.testState);

        expect(result).toEqual(1.5);
    });
});
