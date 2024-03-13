import pandas as pd

def fetch_player_data():
    data = None
    with open('Datasheet.xlsx', 'rb') as f:
        df = pd.read_excel(f)
        df["Player"] = df["Player"].fillna("Unknown")
        df["Dribble Skills"]= df["Dribble Skills"].fillna(0)
        df["Length"] = df["Length"].fillna(0)
        df["Weight"] = df["Weight"].fillna(0)
        df["Age"] = df["Age"].fillna(0)
        df["Age"] = df["Age"].round()
        df["Ball Control"] = df["Ball Control"].fillna(0)
        df["Passing Under Pressure"] = df["Passing Under Pressure"].fillna(0)
        df["Team"] = df["Team"].fillna("Unknown")
        df["Position"] = df["Position"].fillna("Unknown")
        df.rename(columns = {'Length':'Height'}, inplace = True) 
        data = df.to_dict(orient='records')
    return data 