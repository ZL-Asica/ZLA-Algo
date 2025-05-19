---
title: '3024. 三角形类型'
description: 'You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.'
keywords:
  - algorithms
  - leetcode
  - array
  - sorting
  - Math
slug: /problems/type-of-triangle
---

题目链接：
[3024. 三角形类型](https://leetcode.com/problems/type-of-triangle/)

> Difficulty: Easy
>
> Topics: Array, Math, Sorting

## Question

You are given a **0-indexed** integer array `nums` of size `3` which can form the sides of a triangle.

- A triangle is called `equilateral` if it has all sides of equal length.
- A triangle is called `isosceles` if it has exactly two sides of equal length.
- A triangle is called `scalene` if all its sides are of different lengths.

_Return a string representing the type of triangle that can be formed or `"none"` if it **cannot** form a triangle._

**Example 1:**

```plaintext
Input: nums = [3,3,3]
Output: "equilateral"
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.
```

**Example 2:**

```plaintext
Input: nums = [3,4,5]
Output: "scalene"
Explanation:
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3.
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.
```

**Constraints:**

- $nums.length = 3$
- $1 \le nums[i] \le 100$

## 解题思路

### 方法1:

#### 思路

这道题的主要目的是判断是否是一个等边三角形、等腰三角形、还是普通三角形。但我们要记住一个大前提，我们在判断这个东西之前，需要先判断是否能构成一个三角形。

- 一个三角形需要满足任意两边之和大于第三边。

然后我们再根据三角形的类型来判断。

回忆一下小学数学知识，我们最简单的判断三角形是否成立的方法就是最短的两边是否大于第三边。

#### 代码

```python
class Solution:
    def triangleType(self, nums: List[int]) -> str:
        # 先排序
        a, b, c = sorted(nums)
        # 判断是否能构成三角形
        if a + b <= c:
            return "none"

        # 通过 set 来判断三角形的类型
        unique_sides = len(set(nums))
        # 等边三角形
        if unique_sides == 1:
            return "equilateral"
        # 等腰三角形
        elif unique_sides == 2:
            return "isosceles"
        # 普通三角形
        else:
            return "scalene"
```

#### 复杂度

- 时间：$O(n\log{n})$，我们只排序了一次。
- 空间：$O(1)$，因为我们只使用了常数个额外空间。
