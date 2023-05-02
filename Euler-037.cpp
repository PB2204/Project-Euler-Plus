#include <bits/stdc++.h>
using namespace std;

set<int> primes;

void Sieve(int n)
{
    vector<bool> sieve(1000010, false);
    int p = 2;
    sieve[2] = true;
    
    while(p <= n)
    {
        primes.insert(p);
        
        for(int i=2; p*i <= n; i++) sieve[p*i] = true;        
        while(p < sieve.size() && sieve[p]) p++;
        sieve[p] = true;        
    }
}

int main() 
{
    Sieve(1000000);
    
    int n;
    cin >> n;
    
    long ans = 0;
    
    for(auto p : primes)
    {
        if(p <= 7) continue;
        if(p >= n) break;
        
        string s = to_string(p);
        bool valid = true;
        
        
        for(int i=1; i<s.size(); i++)
        {
            if(primes.count(stoi(s.substr(i))) == 0)
            {
                valid = false;
                break;
            }
            if(primes.count(stoi(s.substr(0, s.size()-i))) == 0)
            {
                valid = false;
                break;
            }
        }
        if(valid) 
        {
            cerr << p << endl;
            ans += p;
        }
    }
    cout << ans << endl;
    return 0;
}