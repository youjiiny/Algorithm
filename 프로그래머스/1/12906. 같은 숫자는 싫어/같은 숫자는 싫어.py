def solution(arr):
    stack = []
    
    for i in range(len(arr)):
        if not stack or stack[-1] != arr[i]:
            stack.append(arr[i])
    return stack