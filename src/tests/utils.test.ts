import { convertDate } from "../utils/functions";

test('Converts abbreviated month to full thing', () => {
    expect(convertDate("2022-03-23T00:32:12Z")).toBe('March 22, 2022');
    expect(convertDate("2022-02-23T00:32:12Z")).toBe('February 22, 2022');
    expect(convertDate("2022-01-23T00:32:12Z")).toBe('January 22, 2022');
});