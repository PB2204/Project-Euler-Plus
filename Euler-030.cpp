#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() 
{
    int n;
    cin >> n;
    
    int powers[10];
    
    for(int i=0; i<=9; i++)
    {
        powers[i] = pow(i, n);
    }
    
    int i = 10;
    int total = 0;
    
    for(int i = 10; i < pow(10, n+1); ++i)
    {
        string s = to_string(i);
        int sum = 0;
        
        for(int j=0; j<s.length(); j++)
        {
            sum += powers[s[j]-'0'];            
        }

        if(sum == i) total += sum;         
    }
    cout << total << endl;
    
    return 0;
}