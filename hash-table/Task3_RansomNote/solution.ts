/**
 * Task 3: RansomNote
 *
 * Pattern: Техника подсчёта
 * Green flags: составить из букв, достаточно ли символов, decrement
 *
 * Description:
 * Даны две строки ransomNote и magazine. Верни true, если ransomNote
 * можно составить из букв magazine. Каждая буква из magazine может
 * быть использована только один раз.
 *
 * Signature:
 * export function canConstruct(ransomNote: string, magazine: string): boolean;
 *
 * Test Cases:
 * [
 *   {"input": ["a", "b"], "expected": false},
 *   {"input": ["aa", "ab"], "expected": false},
 *   {"input": ["aa", "aab"], "expected": true},
 *   {"input": ["", "anything"], "expected": true},
 *   {"input": ["abc", "aabbcc"], "expected": true}
 * ]
 */

export function canConstruct(ransomNote: string, magazine: string): boolean {
    // TODO: Implement your solution here
    const magMap = new Map<string, number>();

    for (const ch of magazine) {
        if (magMap.has(ch)) {
            const currCount = magMap.get(ch) || 0;

            magMap.set(ch, currCount + 1);
        } else {
            magMap.set(ch, 1);
        }
    }

    for (const ch of ransomNote) {
        const value = magMap.get(ch);

        if (value === undefined || value === 0) {
            return false;
        }

        magMap.set(ch, value - 1);
    }

    return true;
}
