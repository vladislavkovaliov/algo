/**
 * Task 2: ValidAnagram
 *
 * Pattern: Техника подсчёта
 * Green flags: анаграмма, сравнить частоты символов
 *
 * Description:
 * Даны две строки s и t. Верни true, если t является анаграммой s,
 * и false в противном случае.
 *
 * Signature:
 * export function isAnagram(s: string, t: string): boolean;
 *
 * Test Cases:
 * [
 *   {"input": ["anagram", "nagaram"], "expected": true},
 *   {"input": ["rat", "car"], "expected": false},
 *   {"input": ["", ""], "expected": true},
 *   {"input": ["a", "a"], "expected": true},
 *   {"input": ["ab", "a"], "expected": false}
 * ]
 */

export function isAnagram(s: string, t: string): boolean {
    // TODO: Implement your solution here

    if (s.length !== t.length) {
        return false;
    }

    const map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map.has(char)) {
            const currCount = map.get(char) || 0;

            map.set(char, currCount + 1)
        } else {
            map.set(char, 1);
        }
    }


    for (const ch of t) {
        const value = map.get(ch);

        if (value === undefined || value === 0) {
            return false;
        }

        map.set(ch, value - 1);
    }

    return true;
}
