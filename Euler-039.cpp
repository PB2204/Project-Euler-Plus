#include <bits/stdc++.h>
using namespace std;
    
int M[5000001];
vector<int> C;
vector<int> ans;

int MAX = 5000000;

void GenerateTriples(int a, int b, int c)
{
    int triangle = a + b + c;
    
    if(triangle > MAX) return;
        
    for(int k=2; triangle <= MAX; k++)
    {
        C[triangle]++;        

        if(M[C[triangle]])
        {
            M[C[triangle]] = min((int)triangle, M[C[triangle]]);            
            ans[triangle] = min(ans[triangle], M[C[triangle]]);
        }
        else
        {
            M[C[triangle]] = triangle;
            ans[triangle] = triangle;
        }
        triangle = (a * k) + (b * k) + (c * k);                
    }
    
    for(int i=0; i<3; i++)
    {
        int next_a, next_b, next_c;
        
        switch(i)
        {
            case 0:
            {
                next_a = -a + (2 * b) + (2 * c);
                next_b = -(2 * a) + b + (2 * c);
                next_c = -(2 * a) + (2 * b) + (3 * c);
                GenerateTriples(next_a, next_b, next_c);
                break;
            }
            case 1:
            {
                next_a = a + (2 * b) + (2 * c);
                next_b = (2 * a) + b + (2 * c);
                next_c = (2 * a) + (2 * b) + (3 * c);
                GenerateTriples(next_a, next_b, next_c);
                break;
            }
            case 2:
            {
                next_a = a - (2 * b) + (2 * c);
                next_b = (2 * a) - b + (2 * c);
                next_c = (2 * a) - (2 * b) + (3 * c);
                GenerateTriples(next_a, next_b, next_c);
                break;
            }                
        }
    }
}


int main() 
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    
    int t;
    cin >> t;    
                   
    C = vector<int>(MAX + 1, 0);
    ans = vector<int>(MAX + 1);
    
    for(int i=0; i<=MAX; i++) ans[i] = i;
    
    GenerateTriples(3, 4, 5);
    
    int maxCount = 1;        
    int index = 12;
    
    for(int i=12; i <= MAX; i++)
    {
        if(C[i] > maxCount)
        {
            maxCount = C[i];
            index = i;
        }
        ans[i] = index;
    }

    while(t--)
    {
        int n;
        cin >> n;
        
        cout << ans[n] << endl;
    }
    return 0;
}