#include <bits/stdc++.h>
using namespace std;


bool IsPrime(int n)
{
    if(n % 2 == 0) return false;
    
    for(int i=3; i<=sqrt(n); i+=2)
    {
        if(n % i == 0) return false;
    }
    return true;    
}

set<string> primes;


int main() 
{
    int N;
    cin >> N;
    
    long long int ans = 0;
        
    for(int i=N; i>=3; i--)
    {
        if(IsPrime(i)) primes.insert(to_string(i));
    }    
    
    set<string> valid;
    
    
    for(auto it : primes)
    {
        if(valid.count(it) != 0)
        {
            ans += stoi(it);
            continue;
        }
        
        string num = it;
        vector<string> rotations;
        
        for(int i=0; i<num.size(); i++)
        {
            if(primes.count(num) == 0) break;
            else 
            {
                rotations.push_back(num);
                
                if(i == num.size()-1) 
                {
                    for(auto rot : rotations)
                    {
                        valid.insert(rot);
                    }                    
                    ans += stoi(it);                    
                    break;
                }
                num = num.substr(1) + num.front();
            }
        }
    }
    cout << ans + 2 << endl;
    
    return 0;
}