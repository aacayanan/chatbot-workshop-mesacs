import tkinter as tk  # Import tkinter for creating GUI applications
from openai import OpenAI  # Import OpenAI for interacting with the GPT API
from dotenv import find_dotenv, load_dotenv  # Import dotenv utilities to load environment variables


def button_clicked():
    # This function will be triggered when the button is clicked (currently unused)
    # It gets the content from the text box and prints it
    content = text_box.get(1.0, tk.END)  # Retrieve all text from the text box (from line 1 to the end)
    print(content)  # Print the user's input (can be used for debugging)


def call_gpt():
    # This function handles calling the GPT API and displaying the response
    dotenv_path = find_dotenv()  # Locate the .env file in the project directory
    load_dotenv(dotenv_path)  # Load environment variables (e.g., API keys) from .env

    content = text_box.get(1.0, tk.END)  # Get the user's input from the text box
    text_box.delete(1.0, tk.END)  # Clear the text box content

    client = OpenAI()  # Initialize the OpenAI client
    response = client.chat.completions.create(  # Send a request to the GPT-3.5-turbo model
        model="gpt-3.5-turbo",  # Specify the model to use
        messages=[  # Provide messages to the chat completion API
            {"role": "system", "content": "Reply like a pirate"},  # System instruction to the model
            {"role": "user", "content": content}  # User's message as input to the model
        ]
    )
    # Print the GPT response (can be used for debugging)
    print(response.choices[0].message.content)
    # Open a new window and display the GPT response
    open_new_window(response.choices[0].message.content)


def open_new_window(gpt_response):
    # This function creates a new window to display the GPT response
    new_window = tk.Toplevel(root)  # Create a new window on top of the main window
    new_window.geometry("400x400")  # Set the window size to 400x400 pixels
    new_window.title("Bot Response")  # Set the title of the new window

    label = tk.Label(new_window, text="Bot Response:")  # Create a label with the text "Bot Response"
    label.pack(pady=20)  # Display the label with padding of 20 pixels

    # Create a text widget to display the GPT response
    response_textbox = tk.Text(new_window, height=15, width=40, wrap="word", font=("Arial", 10))
    response_textbox.pack(pady=20)  # Display the text box with padding of 20 pixels

    # Insert the GPT response into the text box
    response_textbox.insert(tk.END, gpt_response)
    # Make the text box read-only to prevent user editing
    response_textbox.config(state=tk.DISABLED)

    # Create a button to close the new window
    close_button = tk.Button(new_window, text="Close", command=new_window.destroy)
    close_button.pack(pady=10)  # Display the button with padding of 10 pixels


# Create the main window
root = tk.Tk()  # Initialize the tkinter main window
root.title("Chat Bot")  # Set the title of the main window
root.geometry("500x500")  # Set the size of the main window to 500x500 pixels

# Create and display a label with the title "Welcome to Chat Bot"
main_label = tk.Label(root, text="Welcome to Chat Bot")
main_label.pack(pady=20)  # Display the label with padding of 20 pixels

# Create and display a label prompting the user to enter a message
text_box_label = tk.Label(root, text="Enter your message:")
text_box_label.pack()

# Create and display a text box for user input
text_box = tk.Text(root, height=15, width=50)  # Text widget to accept user input
text_box.pack(pady=20)  # Display the text box with padding of 20 pixels

# Create and display a button to submit the user's input and call the GPT API
submit_button = tk.Button(root, text="Submit", command=call_gpt)
submit_button.pack(pady=20)  # Display the button with padding of 20 pixels

# Start the tkinter main event loop (keeps the window running)
root.mainloop()
