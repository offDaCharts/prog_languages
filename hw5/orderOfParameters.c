/* This program shows that there is no set order in which c
 * parameters are evaluated
 */

#include <stdio.h>

int main(){
	int a;
	//Note: Let the arguements be numbered 1,2,3 from left to right
	
	a = 0;
    printf("%d\t%d\t%d\n", a, a++, a++);
	//Output: 2 1 0
	//Arguements are evaluated in the order: 3 2 1
	
	a = 0;
    printf("%d\t%d\t%d\n", a++, a, a++);
	//Output: 1 2 0
	//Arguements are evaluated in the order: 3 1 2
	
	a = 0;
    printf("%d\t%d\t%d\n", a++, a++, a);
	//Output: 1 0 2
	//Arguements are evaluated in the order: 2 1 3
	
	a = 0;
    printf("%d\t%d\t%d\n", a++, a++, a++);
	//Output: 2 1 0
	//Arguements are evaluated in the order: 3 2 1
	
    return 0;
}
