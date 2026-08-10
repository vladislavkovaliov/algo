/**
 * Task 1: RemoveDuplicates
 *
 * Pattern: Быстрый и медленный
 * Green flags: in-place, сохранить порядок, удалить дубликаты
 *
 * Description:
 * Дан массив чисел, отсортированный по возрастанию.
 * Удали дубликаты in-place (прямо в этом массиве, не создавая новый),
 * чтобы каждое число встречалось только один раз.
 * Верни длину изменённого массива.
 *
 * Signature:
 * export function removeDuplicates(nums: number[]): number;
 *
 * Test Cases:
 * [
 *   {"input": [[1, 1, 2]], "expected": 2},
 *   {"input": [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], "expected": 5},
 *   {"input": [[1]], "expected": 1},
 *   {"input": [[1, 2, 3]], "expected": 3}
 * ]
 */

export function removeDuplicates(nums: number[]): number {
    // TODO: Implement your solution here

    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow = slow + 1;
            nums[slow] = nums[fast]
        }
    }

    return slow + 1;
}
