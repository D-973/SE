import cv2
import numpy as np
import os 
import webbrowser

# Set Current Working Directory
work_dir = r"D:\Dhea\ML\FaceRecogDir"

class FaceRecognitionLauncher:
    def __init__(self, work_dir):
        # Create recognizer using the contrib module
        self.recognizer = cv2.face.LBPHFaceRecognizer_create()
        self.recognizer.read(os.path.join(work_dir, 'trainer/trainer.yml'))

        # Load the face cascade classifier
        self.faceCascade = cv2.CascadeClassifier(
            os.path.join(work_dir, 'haarcascade_frontalface_default.xml')
        )
        self.font = cv2.FONT_HERSHEY_SIMPLEX

        # Names related to ids
        self.names = ['None', 'Dhea', 'Atha', 'Hizkia'] 

        # Confidence and recognition tracking
        self.recognized_faces_count = 0
        self.required_recognitions = 5
        self.confidence_threshold = 50

    def recognize_face(self):
        # Initialize and start realtime video capture
        cam = cv2.VideoCapture(0)
        cam.set(3, 640) # set video widht
        cam.set(4, 480) # set video height

        # Define min window size to be recognized as a face
        minW = 0.1*cam.get(3)
        minH = 0.1*cam.get(4)

        while True:
            ret, img = cam.read()
            img = cv2.flip(img, 1) # Video rotation
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            
            faces = self.faceCascade.detectMultiScale(
                gray, 
                scaleFactor=1.2, 
                minNeighbors=5, 
                minSize=(int(minW), int(minH))
            )
            
            recognized_this_frame = False
            
            for(x,y,w,h) in faces:
                cv2.rectangle(img, (x,y), (x+w,y+h), (0,255,0), 2)
                
                id, confidence = self.recognizer.predict(gray[y:y+h,x:x+w])
                
                # If confidence is less them 100 ==> "0" : perfect match 
                if (confidence < self.confidence_threshold):
                    id = self.names[id]
                    confidence = "  {0}%".format(round(100 - confidence))
                    recognized_this_frame = True
                else:
                    id = "unknown"
                    confidence = "  {0}%".format(round(100 - confidence))
                
                cv2.putText(
                    img, 
                    str(id), 
                    (x+5,y-5), 
                    self.font, 
                    1, 
                    (255,255,255), 
                    2
                )
                cv2.putText(
                    img, 
                    str(confidence), 
                    (x+5,y+h-5), 
                    self.font, 
                    1, 
                    (255,255,0), 
                    1
                )
            
            # Count consistent recognitions
            if recognized_this_frame:
                self.recognized_faces_count += 1
            else:
                self.recognized_faces_count = 0
            
            # If face is consistently recognized, launch web app
            if self.recognized_faces_count >= self.required_recognitions:
                cam.release()
                cv2.destroyAllWindows()
                return True
            
            # Show video
            cv2.imshow('Face Recognition using OpenCV', img) 
            
            # Handle key press
            k = cv2.waitKey(10) & 0xff # Press 'ESC' for exiting video
            if k == 27:
                break
        
        # Cleanup
        cam.release()
        cv2.destroyAllWindows()
        return False

    def launch_web_app(self):
        # Path to your local HTML file
        web_app_path = os.path.join(work_dir, 'index.html')
        webbrowser.open('file://' + web_app_path)

def main():
    launcher = FaceRecognitionLauncher(work_dir)
    
    if launcher.recognize_face():
        print("\n [INFO] Face recognized! Launching web application...")
        launcher.launch_web_app()
    else:
        print("\n [INFO] Face recognition failed or cancelled.")

if __name__ == "__main__":
    main()