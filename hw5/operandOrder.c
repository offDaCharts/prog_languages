/* This program shows that there is no set order in which c
 * parameters are evaluated
 */

#include <stdio.h>

int fun(int *i) {
    *i += 5;
    return 4;
}
int main() {
    int x = 3;
    x = x + fun(&x);
	printf("%d\n", x);
	return 0;
}