def getMax(arr)
    def maxTailRecur(arr, max, index)
        if index == arr.size 
		    max
        else
		    maxTailRecur(arr, (arr[index] > max) ? arr[index]: max, index + 1)
        end
    end
    return maxTailRecur(arr, arr[0], 1);
end

puts getMax([1,2,43,24,56,76,8])