#include <stdio.h>

int getMax(int arr[], int length) {
	return maxTailRecur(arr, arr[0], 1, length);
}

int maxTailRecur(int arr[], int max, int index, int length){
	if(index == length) {
		return max;
	} else {
		return maxTailRecur(arr, (arr[index] > max)? arr[index] : max, index + 1, length);
	}
}


int main(){
    int array[10] = { 1,2,10,3,6,7,4,9,6,9 };
    printf("%d\n", getMax(array, 10));
    return 0;
}
