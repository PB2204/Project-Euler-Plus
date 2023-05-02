#include <bits/stdc++.h>
using namespace std;

typedef unsigned long long ULL;

ULL FindDigit(ULL target)
{    
    if(target < 10) return target;
    
    ULL pos, power, number, digits, next;
    
    pos = power = number = 10;
    next = 90;
    digits = 2;
    
    while(pos + (next * digits) <= target)
    {    
        pos += (next * digits);
        next *= 10;
        power *= 10;
        number = power;        
        digits++;    
    }        
    
    while(pos != target)
    {                                                             
        next = pos + (digits * power);
        
        if(next == target)
        {        
            number += power;
            pos = next;
            break;
        }
        if(next >= target)
        {            
            if(power == 10 && next >= target - 10)
            {                                
                break;
            }            
            power /= 10;            
            continue;
        }                      
        number += power;        
        pos = next;
    }    
    string s = to_string(number);    
    
    int index = 0;
    
    for(; pos < target; pos++)
    {                        
        index++; 
        
        if(index == s.size())
        {
            number++;
            s = to_string(number);
            index = 0;
        }
    }
    return s[index]-'0';    
}

int main() 
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    
    int t;
    cin >> t;

    while(t--)
    {                
        ULL ans = 1;
        ULL n, digit;
        
        for(int i=0; i<7; i++)
        {            
            cin >> n;
            
            digit = FindDigit(n);            
            ans *= digit;
        }
        cout << ans << "\n";
    }    
}