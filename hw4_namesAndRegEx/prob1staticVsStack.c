#include <stdio.h>

int b = 4;

int g(){
	int b = 3;
	printf("%d\n",f()); //f() returns the global b (4)
	//If the b declared in g() was stored in static memory instead
	//of the stack, f would reference the local b and return 3
}

int f(){
	return b;
}

int main(int argc, char *argv[]){
	g();
    return 0;
}
