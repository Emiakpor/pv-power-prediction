import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#4f6d7a",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f7f7f7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10, // slightly overlap header
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4f6d7a",
    marginTop: 15,
  },
  paragraph: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0984e3",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noData: {
    fontSize: 16,
    color: "#636e72",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2d3436",
    textAlign: "center",
  },
});
