

from flask import Flask, request, abort
app = Flask(__name__)
@app.route('/webhook', methods=['POST'])
def get_webhook():
	if request.method == 'POST':
    	  print("received data: ", request.json)
    	  return 'success', 200
	else:
    	  abort(400)
if __name__ == '__main__':
	app.run('147.144.1.255')


# from flask import Flask, request
# from pyngrok import ngrok

# app = Flask(__name__)

# @app.route('/webhook', methods=['POST'])
# def webhook():
#     data = request.get_json()
#     # Process the received webhook data here
#     print(data)
#     return 'Webhook received', 200

# if __name__ == '__main__':
#     # Open a tunnel using ngrok
#     ngrok_tunnel = ngrok.connect(5000) 
#     print('Webhook URL:', ngrok_tunnel.public_url + '/webhook')
    # app.run(debug=False) 
