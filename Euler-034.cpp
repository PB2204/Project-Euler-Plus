#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int fact[10] =
{
    1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880
};


int main() 
{
    int N;
    cin >> N;
    
    long long ans = 0;
    
    for(int i = N-1; i>=10; i--)
    {
        string num = to_string(i);
        
        int digitSum = 0;
        
        for(int j=0; j<num.size(); j++)
        {
            digitSum += fact[(num[j]-'0')];                        
        }
        if(digitSum % i == 0) 
        {
            ans += i;
        }
    }
    cout << ans << endl;    
}